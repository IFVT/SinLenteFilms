import { useLanguage } from '../context/useLanguage';
import type { Film } from '../data/films';
import { PlayButton } from './PlayButton';
import { Reveal } from './Reveal';

interface FilmBandProps {
  film: Film;
  onPlay: (vimeoId: string) => void;
}

export function FilmBand({ film, onPlay }: FilmBandProps) {
  const { lang } = useLanguage();

  return (
    <>
      <article className="relative flex min-h-[70vh] items-center justify-center overflow-hidden border-t border-line-soft md:min-h-[88vh]">
        <img src={film.frame} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="scrim-film pointer-events-none absolute inset-0" />

        {film.badge && (
          <>
            <Reveal className="absolute left-4 top-4 z-[3] md:left-8 md:top-[30px]">
              <div className="ts-soft rounded-md border-[1.5px] border-gold bg-gold-badge-bg px-3 py-2 font-mono text-[10px] uppercase tracking-[1.5px] text-white shadow-[0_0_30px_-8px_oklch(0.7_0.1_75_/_0.5)] md:px-[18px] md:py-[11px] md:text-xs">
                {film.badge[lang]}
              </div>
            </Reveal>
            <div className="pointer-events-none absolute inset-0 z-[3] border-[1.5px] border-gold-bright" />
          </>
        )}

        <div className="relative z-[2] max-w-[880px] px-6 py-16 text-center md:px-16">
          <Reveal>
            <h3 className="ts-lg mb-3 font-display text-3xl font-semibold tracking-[1px] text-white md:mb-4 md:text-[54px]">
              {film.title[lang]}
            </h3>
          </Reveal>
          <Reveal delay={120}>
            <div className="ts-soft font-body text-xs tracking-[0.3px] text-ink-3 md:text-sm">{film.meta[lang]}</div>
          </Reveal>
          {film.fest && (
            <Reveal delay={240}>
              <div className="ts-soft mt-2 font-body text-[11px] tracking-[0.3px] text-gold-bright md:text-[13px]">
                {film.fest[lang]}
              </div>
            </Reveal>
          )}
          <Reveal delay={360}>
            <button
              type="button"
              onClick={() => onPlay(film.vimeoId)}
              aria-label={`${film.cta} — ${film.title[lang]}`}
              className="mt-6 inline-flex cursor-pointer flex-col items-center gap-3 border-0 bg-transparent md:mt-[30px]"
            >
              <span className="ts-soft font-mono text-[11px] uppercase tracking-[2px] text-white md:text-xs">
                {film.cta}
              </span>
              <PlayButton size="md" />
            </button>
          </Reveal>
        </div>
      </article>
      <div className="bg-bg px-6 py-10 text-center md:px-16 md:py-[46px]">
        <Reveal>
          <p className="mx-auto max-w-[820px] font-body text-base leading-[1.75] text-ink-soft md:text-lg">
            {film.synopsis[lang]}
          </p>
        </Reveal>
      </div>
    </>
  );
}
