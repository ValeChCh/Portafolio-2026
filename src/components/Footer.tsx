import { VALERIA_PROFILE } from '../data';

const SOCIAL_GLYPHS: Record<string, string> = {
  LinkedIn: 'in',
  Behance: 'Bē',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-black bg-[#8F9DE2] py-8 text-black dark:bg-slate-900 dark:text-white dark:border-white no-print" id="app-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        <span className="font-sans text-xs font-black bg-black text-white px-2 py-0.5 rounded-full dark:bg-white dark:text-black shrink-0">
          © {currentYear}
        </span>
        <div className="font-sans text-xs font-extrabold tracking-wider flex flex-col gap-0.5 text-center md:text-left" id="footer-credits">
          <span>Valeria Charco Portfolio. Todos los derechos reservados</span>
          <span>Si, este sitio lo hice con ayuda de AI Studio y Cursor 💗</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4" id="footer-social-links">
          {VALERIA_PROFILE.socials.map((social, index) => {
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
