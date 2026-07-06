import reelImg from '../assets/frames/reel_tree.webp';
import { useLanguage } from '../context/useLanguage';
import { content } from '../data/content';
import { PlayButton } from './PlayButton';
import { Reveal } from './Reveal';

interface ReelProps {
  onPlay: () => void;
}

export function Reel({ onPlay }: ReelProps) {
  const { lang } = useLanguage();
  const t = content[lang].reel;

  return (
    <section id="reel" className="relative h-dvh overflow-hidden border-t border-line-soft">
      <img src={reelImg} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="scrim-vertical pointer-events-none absolute inset-0" />

      <button
        type="button"
        onClick={onPlay}
        aria-label={t.playAria}
        className="absolute inset-0 flex cursor-pointer items-center justify-center border-0 bg-transparent"
      >
        <PlayButton size="lg" />
      </button>

      <div className="pointer-events-none absolute inset-x-6 bottom-10 md:inset-x-16 md:bottom-[60px]">
        <Reveal>
          <h2 className="ts-lg font-display text-xl font-semibold leading-none text-white lg:text-[60px]">
            {t.title}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="ts-soft mt-3 max-w-[720px] font-body text-xs italic text-ink-3 lg:text-[26px]">{t.sub}</p>
        </Reveal>
        <Reveal delay={240}>
          <div className="ts-soft mt-4 font-mono text-[11px] uppercase tracking-[3px] text-gold-bright md:mt-[22px] md:text-xs">
            {t.meta}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
