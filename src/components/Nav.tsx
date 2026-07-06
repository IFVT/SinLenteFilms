import { useLanguage } from '../context/useLanguage';
import { content } from '../data/content';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Nav() {
  const { lang } = useLanguage();
  const t = content[lang].nav;

  const links = [
    { href: '#reel', label: t.reel },
    { href: '#about', label: t.about },
    { href: '#crew', label: t.crew },
    { href: '#work', label: t.work },
    { href: '#contact', label: t.contact },
  ];

  return (
    <nav className="sticky top-0 z-50 flex h-16 items-center justify-between gap-4 border-b border-line-2 bg-bg-black px-5 md:h-[78px] md:px-12">
      <div className="flex shrink-0 items-center gap-3 md:gap-4">
        <LanguageSwitcher />
        <a
          href="#top"
          className="ts-soft shrink-0 font-display text-sm font-semibold tracking-[1px] text-ink md:text-[21px]"
        >
          SINLENTE<span className="font-normal text-ink-brand"> FILMS</span>
        </a>
      </div>
      <div className="no-scrollbar ts-soft flex gap-4 overflow-x-auto text-[11px] uppercase tracking-[2px] text-ink-3 md:gap-7 md:text-xs">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="shrink-0 whitespace-nowrap transition-colors hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
