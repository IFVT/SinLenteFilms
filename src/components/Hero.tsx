import logo from '../assets/logo_sinlente.png';
import { useLanguage } from '../context/useLanguage';
import { content } from '../data/content';
import { Reveal } from './Reveal';

export function Hero() {
  const { lang } = useLanguage();
  const t = content[lang].hero;

  return (
    <header
      id="top"
      className="relative -mt-16 flex h-dvh flex-col items-center justify-center gap-6 overflow-hidden bg-bg-black px-6 md:-mt-[78px] md:gap-8"
    >
      <img
        src={logo}
        alt="Sinlente Films"
        className="max-h-[45dvh] w-auto max-w-[180px] md:max-w-[300px]"
      />
      <Reveal className="text-center font-mono text-[10px] uppercase tracking-[3px] text-ink-faint md:text-xs md:tracking-[4px]">
        {t.place}
      </Reveal>
    </header>
  );
}
