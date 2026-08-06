import { getFormspreeEndpoint, getFormSubmitEmail } from './contactConfig';

export type ContactPayload = {
  name: string;
  email: string;
  subjectLabel: string;
  message: string;
  wantMeeting: boolean;
  meetingViaCalendly: boolean;
  preferredDate?: string | null;
  preferredTime?: string | null;
};

export type SubmitContactResult =
  | { ok: true }
  | { ok: false; error: 'network' | 'provider' | 'activation' };

function buildBody(payload: ContactPayload) {
  const meetingLines: string[] = [];
  if (payload.wantMeeting) {
    meetingLines.push(
      payload.meetingViaCalendly
        ? 'Meeting: visitor booked (or will book) via Calendly → Google Meet'
        : 'Meeting requested (preferred slot below — please send Google Meet invite)'
    );
    if (payload.preferredDate) meetingLines.push(`Preferred date: ${payload.preferredDate}`);
    if (payload.preferredTime) meetingLines.push(`Preferred time: ${payload.preferredTime}`);
  } else {
    meetingLines.push('Meeting: not requested');
  }

  return {
    name: payload.name,
    email: payload.email,
    _replyto: payload.email,
    subject: `[Portfolio] ${payload.subjectLabel}`,
    message: payload.message,
    meeting: meetingLines.join('\n'),
    _subject: `[Portfolio] ${payload.subjectLabel} — ${payload.name}`,
  };
}

async function postJson(url: string, body: Record<string, unknown>): Promise<SubmitContactResult> {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });

    const text = await res.text().catch(() => '');
    let parsed: { success?: string | boolean; message?: string } | null = null;
    try {
      parsed = text ? (JSON.parse(text) as { success?: string | boolean; message?: string }) : null;
    } catch {
      parsed = null;
    }

    const msg = `${parsed?.message ?? text}`;
    if (/activate|confirm your email|check your email/i.test(msg)) {
      return { ok: false, error: 'activation' };
    }

    const successFlag = parsed?.success;
    if (res.ok && (successFlag === undefined || successFlag === true || successFlag === 'true')) {
      return { ok: true };
    }

    if (!res.ok) return { ok: false, error: 'provider' };
    if (successFlag === false || successFlag === 'false') {
      return { ok: false, error: /activate|confirm/i.test(msg) ? 'activation' : 'provider' };
    }

    return { ok: true };
  } catch {
    return { ok: false, error: 'network' };
  }
}

export async function submitContactMessage(
  payload: ContactPayload,
  inboxEmail: string
): Promise<SubmitContactResult> {
  const body = buildBody(payload);
  const formspree = getFormspreeEndpoint();

  if (formspree) {
    return postJson(formspree, {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: `${body.message}\n\n---\n${body.meeting}`,
    });
  }

  const to = getFormSubmitEmail(inboxEmail);
  return postJson(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    ...body,
    _captcha: false,
    _template: 'table',
  });
}
