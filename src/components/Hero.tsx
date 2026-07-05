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
      className="relative -mt-16 flex h-screen flex-col items-center justify-center overflow-hidden bg-bg-black md:-mt-[78px]"
    >
      <img src={logo} alt="Sinlente Films" className="w-[180px] md:w-[300px]" />
      <Reveal className="absolute inset-x-0 bottom-8 text-center font-mono text-[10px] uppercase tracking-[3px] text-ink-faint md:bottom-10 md:text-xs md:tracking-[4px]">
        {t.place}
      </Reveal>
    </header>
  );
}
