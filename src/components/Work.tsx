import { useLanguage } from '../context/useLanguage';
import { content } from '../data/content';
import { ficcion, documental } from '../data/films';
import { FilmBand } from './FilmBand';
import { Reveal } from './Reveal';

interface WorkProps {
  onPlay: (vimeoId: string) => void;
}

export function Work({ onPlay }: WorkProps) {
  const { lang } = useLanguage();
  const t = content[lang].work;

  return (
    <section id="work" className="border-t border-line">
      <div className="px-6 py-16 text-center md:px-16 md:py-24">
        <Reveal className="mb-3 font-mono text-xs uppercase tracking-[3px] text-gold md:mb-[14px]">
          {t.eyebrow}
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display text-4xl font-semibold text-ink md:text-[54px]">{t.title}</h2>
        </Reveal>
      </div>

      <div className="py-2 pb-5 text-center font-mono text-xs uppercase tracking-[4px] text-ink-faint">
        {t.ficcion}
      </div>
      {ficcion.map((film) => (
        <FilmBand key={film.slug} film={film} onPlay={onPlay} />
      ))}

      <div className="border-t border-line-soft py-2 pb-5 text-center font-mono text-xs uppercase tracking-[4px] text-ink-faint">
        {t.documental}
      </div>
      {documental.map((film) => (
        <FilmBand key={film.slug} film={film} onPlay={onPlay} />
      ))}
    </section>
  );
}
