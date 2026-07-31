import { VALERIA_PROFILE } from '../data';

const SOCIAL_GLYPHS: Record<string, string> = {
  LinkedIn: 'in',
  Behance: 'Bē',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-black bg-[#fef08a] py-8 text-black dark:bg-slate-900 dark:text-white dark:border-white no-print" id="app-footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="flex items-center justify-center space-x-2" id="footer-credits">
          <span className="font-mono text-xs font-black bg-black text-white px-2 py-0.5 rounded-full dark:bg-white dark:text-black">
            © {currentYear}
          </span>
          <span className="font-mono text-xs font-extrabold uppercase tracking-wider">
            Valeria • Neo-Brutalist Pop Portfolio
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4" id="footer-social-links">
          {VALERIA_PROFILE.socials.map((social, index) => {
            const glyph = SOCIAL_GLYPHS[social.name];
            if (glyph) {
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
            }

            const bgColors = ['bg-white', 'bg-[#fbcfe8]', 'bg-[#bae6fd]', 'bg-[#a7f3d0]'];
            const bg = bgColors[index % bgColors.length];
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`neo-pill ${bg} text-black hover:scale-105 transition-transform`}
                id={`footer-social-${social.name.toLowerCase()}`}
              >
                {social.name}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
