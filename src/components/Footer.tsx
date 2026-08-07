import { useLocalizedContent } from '../i18n/useI18n';

const SOCIAL_GLYPHS: Record<string, string> = {
  LinkedIn: 'in',
  Behance: 'Bē',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { profile, t } = useLocalizedContent();

  return (
    <footer className="border-t-2 border-black bg-[#8F9DE2] py-8 text-black no-print" id="app-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <span className="font-sans text-xs font-black bg-black text-white px-2 py-0.5 rounded-full shrink-0">
          © {currentYear}
        </span>
        <div className="font-sans text-xs font-extrabold tracking-wider text-center md:text-left" id="footer-credits">
          <span>{t.footerRights}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4" id="footer-social-links">
          {profile.socials.map((social, index) => {
            const glyph = SOCIAL_GLYPHS[social.name];
            if (!glyph) return null;

            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="neo-social-icon"
                id={`footer-social-${social.name.toLowerCase()}`}
              >
                <span>{glyph}</span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
