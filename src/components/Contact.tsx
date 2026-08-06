import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Mail, MapPin, Send, CheckCircle, Clock, Calendar, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useLocalizedContent } from '../i18n/useI18n';
import CalendlyEmbed from './CalendlyEmbed';
import { getCalendlyUrl } from '../lib/contactConfig';
import { submitContactMessage } from '../lib/submitContact';

const AVAILABLE_TIMES = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
];

function toDateKey(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function startOfToday() {
  const n = new Date();
  return new Date(n.getFullYear(), n.getMonth(), n.getDate());
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function Contact() {
  const { profile, t } = useLocalizedContent();
  const calendlyUrl = getCalendlyUrl();
  const useCalendly = Boolean(calendlyUrl);

  const subjectOptions = useMemo(
    () => [
      { value: 'collab', label: t.subjectCollab },
      { value: 'general', label: t.subjectGeneral },
      { value: 'feedback', label: t.subjectFeedback },
      { value: 'talk', label: t.subjectTalk },
    ],
    [t]
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'collab',
    message: '',
  });
  const [wantMeeting, setWantMeeting] = useState(false);
  const [meetingScheduled, setMeetingScheduled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedWithMeeting, setSubmittedWithMeeting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const today = useMemo(() => startOfToday(), []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookedSummary, setBookedSummary] = useState<{ date: string; time: string } | null>(null);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  const formatDateLabel = (dateKey: string) => {
    const [y, m, d] = dateKey.split('-').map(Number);
    const date = new Date(y, m - 1, d);
    const weekday = t.weekdays[(date.getDay() + 6) % 7];
    return t.dateLabel(weekday, d, t.months[m - 1], y);
  };

  const calendarCells = useMemo(() => {
    const first = new Date(viewYear, viewMonth, 1);
    const startPad = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const cells: Array<{ day: number | null; key: string | null; disabled: boolean }> = [];

    for (let i = 0; i < startPad; i++) {
      cells.push({ day: null, key: null, disabled: true });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(viewYear, viewMonth, day);
      const dow = date.getDay();
      const isWeekend = dow === 0 || dow === 6;
      const isPast = date < today;
      cells.push({
        day,
        key: toDateKey(viewYear, viewMonth, day),
        disabled: isWeekend || isPast,
      });
    }

    while (cells.length % 7 !== 0) {
      cells.push({ day: null, key: null, disabled: true });
    }

    return cells;
  }, [viewYear, viewMonth, today]);

  const goPrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const goNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError(null);
  };

  const toggleWantMeeting = (checked: boolean) => {
    setWantMeeting(checked);
    setFormError(null);
    if (!checked) {
      setSelectedDate(null);
      setSelectedTime(null);
      setMeetingScheduled(false);
    }
  };

  const selectDate = (key: string) => {
    setSelectedDate(key);
    setSelectedTime(null);
    setFormError(null);
  };

  const onCalendlyScheduled = useCallback(() => {
    setMeetingScheduled(true);
    setFormError(null);
  }, []);

  const handleSubmitContactForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.name.trim() || !formData.message.trim()) {
      setFormError(t.formErrorRequired);
      return;
    }

    if (!formData.email.trim() || !isValidEmail(formData.email)) {
      setFormError(t.formErrorEmail);
      return;
    }

    if (wantMeeting) {
      if (useCalendly) {
        if (!meetingScheduled) {
          setFormError(t.formErrorCalendly);
          return;
        }
      } else if (!selectedDate || !selectedTime) {
        setFormError(t.formErrorMeetingSlot);
        return;
      }
    }

    const subjectLabel =
      subjectOptions.find((o) => o.value === formData.subject)?.label ?? formData.subject;

    setIsSubmitting(true);
    const result = await submitContactMessage(
      {
        name: formData.name.trim(),
        email: formData.email.trim(),
        subjectLabel,
        message: formData.message.trim(),
        wantMeeting,
        meetingViaCalendly: useCalendly && meetingScheduled,
        preferredDate: selectedDate ? formatDateLabel(selectedDate) : null,
        preferredTime: selectedTime,
      },
      profile.email
    );
    setIsSubmitting(false);

    if (result.ok === false) {
      const err = result.error;
      if (err === 'activation') setFormError(t.formErrorActivation);
      else if (err === 'network') setFormError(t.formErrorNetwork);
      else setFormError(t.formErrorProvider);
      return;
    }

    const meetingBooked =
      wantMeeting && (useCalendly ? meetingScheduled : Boolean(selectedDate && selectedTime));
    setIsSubmitted(true);
    setSubmittedWithMeeting(meetingBooked);
    setBookedSummary(
      !useCalendly && selectedDate && selectedTime
        ? { date: selectedDate, time: selectedTime }
        : null
    );
    setFormData({ name: '', email: '', subject: 'collab', message: '' });
    setWantMeeting(false);
    setSelectedDate(null);
    setSelectedTime(null);
    setMeetingScheduled(false);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmittedWithMeeting(false);
    setBookedSummary(null);
    setFormError(null);
  };

  const emailOk = Boolean(formData.email.trim() && isValidEmail(formData.email));

  return (
    <div className="space-y-12 py-2 md:py-6" id="contact-section-container">
      <div>
        <h2
          className="font-display text-3xl font-black tracking-tight text-black"
          id="contact-heading"
        >
          {t.contactTitle}
        </h2>
        <p className="text-sm font-medium text-slate-700 mt-1 max-w-xl">{t.contactIntro}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="contact-grids">
        <div className="lg:col-span-8 neo-window" id="contact-form-card">
          <div className="neo-window-bar">
            <div className="flex space-x-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 border border-black inline-block" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 border border-black inline-block" />
            </div>
            <span>SEND_MESSAGE.EXE</span>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <h3 className="font-display text-xl font-black text-black flex items-center space-x-2">
              <Mail className="text-black" size={20} />
              <span>{t.sendMessage}</span>
            </h3>

            {isSubmitted ? (
              <div
                className="p-6 rounded-xl bg-[#a7f3d0] border-2 border-black text-black text-center space-y-3 animate-scale-up"
                id="contact-success-state"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white border-2 border-black text-black">
                  <CheckCircle size={24} />
                </div>
                <h4 className="font-display text-base font-black">{t.messageSuccessTitle}</h4>
                <p className="text-xs md:text-sm font-medium text-slate-800 leading-relaxed max-w-sm mx-auto">
                  {t.messageSuccessBody}
                </p>
                {submittedWithMeeting ? (
                  <div className="rounded-xl border-2 border-black bg-[#bae6fd] px-4 py-3 text-left space-y-1 max-w-md mx-auto">
                    <p className="text-xs font-black flex items-center gap-2">
                      <Calendar size={14} />
                      {t.bookingSuccessTitle}
                    </p>
                    {bookedSummary ? (
                      <p className="text-[11px] font-medium leading-relaxed">
                        {t.bookedFor}{' '}
                        <strong className="font-black underline">
                          {formatDateLabel(bookedSummary.date)} {t.atTime} {bookedSummary.time}
                        </strong>
                      </p>
                    ) : null}
                    <p className="text-[10px] font-sans italic">
                      {useCalendly ? t.bookingInviteMeetLive : t.bookingInviteMeetFallback}
                    </p>
                  </div>
                ) : null}
                <button
                  type="button"
                  onClick={resetForm}
                  className="neo-btn-black text-xs pt-1"
                  id="reset-form-btn"
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitContactForm} className="space-y-4" id="contact-actual-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="form-grid-names">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-black text-black uppercase tracking-wider">
                      {t.yourName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.namePlaceholder}
                      className="w-full rounded-xl border-2 border-black bg-white px-4 py-2.5 text-sm font-semibold outline-hidden focus:bg-slate-50 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-black text-black uppercase tracking-wider">
                      {t.contactEmail}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t.emailPlaceholder}
                      className="w-full rounded-xl border-2 border-black bg-white px-4 py-2.5 text-sm font-semibold outline-hidden focus:bg-slate-50 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-black text-black uppercase tracking-wider">
                    {t.subject}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border-2 border-black bg-white px-4 py-2.5 text-sm font-bold outline-hidden focus:bg-slate-50 transition-colors cursor-pointer"
                  >
                    {subjectOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-black text-black uppercase tracking-wider">
                    {t.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t.messagePlaceholder}
                    className="w-full rounded-xl border-2 border-black bg-white px-4 py-2.5 text-sm font-semibold outline-hidden focus:bg-slate-50 transition-colors resize-none"
                  />
                </div>

                <div
                  className="rounded-xl border-2 border-black bg-white p-4 space-y-3"
                  id="optional-meeting-block"
                >
                  <label className="flex items-start gap-3 cursor-pointer" htmlFor="want-meeting">
                    <input
                      id="want-meeting"
                      type="checkbox"
                      checked={wantMeeting}
                      onChange={(e) => toggleWantMeeting(e.target.checked)}
                      className="mt-1 h-4 w-4 accent-black cursor-pointer"
                    />
                    <span className="space-y-1">
                      <span className="flex items-center gap-2 text-sm font-black text-black">
                        <Calendar size={16} />
                        {t.optionalMeetingTitle}
                      </span>
                      <span className="block text-xs font-medium text-slate-600 leading-relaxed">
                        {useCalendly ? t.optionalMeetingHintCalendly : t.optionalMeetingHint}
                      </span>
                    </span>
                  </label>

                  {wantMeeting ? (
                    <div className="space-y-4 pt-2 border-t-2 border-black/10" id="inline-booking-picker">
                      {!emailOk ? (
                        <p className="text-xs font-bold text-black rounded-lg border-2 border-black bg-[#fef08a] px-3 py-2">
                          {t.meetingNeedsEmail}
                        </p>
                      ) : null}

                      {useCalendly && calendlyUrl && emailOk ? (
                        <>
                          <CalendlyEmbed
                            calendlyUrl={calendlyUrl}
                            name={formData.name}
                            email={formData.email}
                            onScheduled={onCalendlyScheduled}
                            title={t.bookCoffee}
                          />
                          {meetingScheduled ? (
                            <p className="text-xs font-bold text-black flex items-center gap-2 rounded-lg border-2 border-black bg-[#a7f3d0] px-3 py-2">
                              <CheckCircle size={14} />
                              {t.calendlyBookedReady}
                            </p>
                          ) : (
                            <p className="text-[11px] font-medium text-slate-600">{t.calendlyPickSlot}</p>
                          )}
                          <a
                            href={calendlyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-black underline"
                          >
                            {t.openCalendlyNewTab}
                            <ExternalLink size={12} />
                          </a>
                        </>
                      ) : null}

                      {!useCalendly ? (
                        <>
                          <p className="text-xs font-bold text-black rounded-lg border-2 border-black bg-[#fef08a] px-3 py-2">
                            {t.calendlyNotConfigured}
                          </p>

                          <div className="space-y-2" id="date-picker-group">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[11px] font-black text-black uppercase tracking-wider">
                                {t.selectDate}
                              </span>
                              <div className="flex items-center gap-1" id="month-nav">
                                <button
                                  type="button"
                                  onClick={goPrevMonth}
                                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-white text-black hover:bg-slate-100 cursor-pointer"
                                  aria-label={t.prevMonth}
                                  id="calendar-prev-month"
                                >
                                  <ChevronLeft size={14} strokeWidth={2.5} />
                                </button>
                                <span className="min-w-[7.5rem] text-center text-[11px] font-black uppercase tracking-wider text-black">
                                  {t.months[viewMonth]} {viewYear}
                                </span>
                                <button
                                  type="button"
                                  onClick={goNextMonth}
                                  className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black bg-white text-black hover:bg-slate-100 cursor-pointer"
                                  aria-label={t.nextMonth}
                                  id="calendar-next-month"
                                >
                                  <ChevronRight size={14} strokeWidth={2.5} />
                                </button>
                              </div>
                            </div>

                            <div className="rounded-xl border-2 border-black bg-white p-2" id="month-calendar">
                              <div className="grid grid-cols-7 gap-1 mb-1" id="weekday-headers">
                                {t.weekdays.map((wd) => (
                                  <span
                                    key={wd}
                                    className="text-center text-[9px] font-black uppercase text-slate-500 py-1"
                                  >
                                    {wd}
                                  </span>
                                ))}
                              </div>
                              <div className="grid grid-cols-7 gap-1" id="days-grid">
                                {calendarCells.map((cell, idx) => {
                                  if (cell.day === null || !cell.key) {
                                    return <div key={`empty-${idx}`} className="aspect-square" />;
                                  }

                                  const isSelected = selectedDate === cell.key;
                                  const isToday =
                                    cell.key ===
                                    toDateKey(today.getFullYear(), today.getMonth(), today.getDate());

                                  return (
                                    <button
                                      key={cell.key}
                                      type="button"
                                      disabled={cell.disabled}
                                      onClick={() => selectDate(cell.key!)}
                                      className={`aspect-square rounded-lg border-2 text-[11px] font-black transition-colors ${
                                        cell.disabled
                                          ? 'border-transparent text-slate-300 cursor-not-allowed'
                                          : isSelected
                                            ? 'border-black bg-[#8F9DE2] text-black cursor-pointer'
                                            : 'border-black bg-white text-black hover:bg-slate-100 cursor-pointer'
                                      } ${isToday && !isSelected && !cell.disabled ? 'ring-2 ring-[#bae6fd] ring-offset-0' : ''}`}
                                      id={`date-btn-${cell.key}`}
                                      aria-label={formatDateLabel(cell.key)}
                                      aria-pressed={isSelected}
                                    >
                                      {cell.day}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                            <p className="text-[10px] font-medium text-slate-500">{t.availabilityHint}</p>
                          </div>

                          {selectedDate ? (
                            <div className="space-y-1.5 animate-fade-in" id="time-picker-group">
                              <span className="text-[11px] font-black text-black uppercase tracking-wider">
                                {t.selectTime}
                              </span>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" id="times-grid">
                                {AVAILABLE_TIMES.map((time) => (
                                  <button
                                    key={time}
                                    type="button"
                                    onClick={() => {
                                      setSelectedTime(time);
                                      setFormError(null);
                                    }}
                                    className={`px-3 py-1.5 rounded-xl border-2 border-black text-center text-xs font-black transition-colors cursor-pointer ${
                                      selectedTime === time
                                        ? 'bg-[#fbcfe8] text-black'
                                        : 'bg-white hover:bg-slate-100 text-black'
                                    }`}
                                    id={`time-btn-${time.replace(/[:\s]/g, '-')}`}
                                  >
                                    {time}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ) : null}

                          {selectedDate && selectedTime ? (
                            <p className="text-xs font-bold text-black flex items-center gap-2">
                              <Clock size={14} />
                              {t.meetingSummary(formatDateLabel(selectedDate), selectedTime)}
                            </p>
                          ) : null}
                        </>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                {formError ? (
                  <p
                    className="text-xs font-bold text-black rounded-lg border-2 border-black bg-[#fecaca] px-3 py-2"
                    role="alert"
                    id="contact-form-error"
                  >
                    {formError}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="neo-btn-black w-full justify-center"
                  id="submit-contact-form"
                >
                  {isSubmitting ? (
                    <span>{t.sending}</span>
                  ) : (
                    <>
                      <span>{wantMeeting ? t.submitMessageWithMeeting : t.submitMessage}</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6" id="contact-aside">
          <div
            className="rounded-xl border-2 border-black bg-[#8F9DE2] text-black p-5 text-xs font-bold space-y-3"
            id="quick-info-card"
          >
            <div className="flex items-center space-x-2.5" id="info-row-location">
              <MapPin size={16} className="text-black shrink-0" />
              <span>{profile.location}</span>
            </div>
            <div className="flex items-center space-x-2.5" id="info-row-email">
              <Mail size={16} className="text-black shrink-0" />
              <a href={`mailto:${profile.email}`} className="hover:underline">
                {profile.email}
              </a>
            </div>
          </div>
          <div className="rounded-xl border-2 border-black bg-white p-5 text-xs font-medium text-slate-700 leading-relaxed space-y-2">
            <p className="font-black text-black uppercase tracking-wider text-[11px] flex items-center gap-2">
              <Calendar size={14} />
              {t.bookCoffee}
            </p>
            <p>{useCalendly ? t.optionalMeetingAsideCalendly : t.optionalMeetingAside}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
