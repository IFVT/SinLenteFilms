import { type Language } from '../context/language-context';
import { useLanguage } from '../context/useLanguage';

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="relative shrink-0">
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as Language)}
        aria-label="Idioma / Language"
        className="cursor-pointer appearance-none rounded border border-line-3 bg-bg-black py-1 pl-2 pr-5 font-mono text-[11px] uppercase tracking-[1px] text-ink-3 transition-colors hover:text-white focus:outline-none focus:ring-1 focus:ring-gold md:text-xs"
      >
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <span className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 text-[8px] text-ink-faint">
        &#9662;
      </span>
    </div>
  );
}
