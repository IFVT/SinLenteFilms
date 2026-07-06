import { Reveal } from './Reveal';

interface BleedProps {
  id: string;
  image: string;
  eyebrow: string;
  variant: 'about' | 'crew';
  lead: string;
  lead2?: string;
}

export function Bleed({ id, image, eyebrow, variant, lead, lead2 }: BleedProps) {
  const scrimClass = variant === 'crew' ? 'scrim-bleed--crew' : 'scrim-bleed';

  return (
    <section id={id} className="relative flex min-h-dvh overflow-hidden border-t border-line-soft">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className={`pointer-events-none absolute inset-0 ${scrimClass}`} />
      <div
        className={`relative z-10 px-6 py-20 md:px-16 md:py-24 lg:px-[120px] lg:py-[100px] ${
          variant === 'about' ? 'max-w-[1000px]' : 'w-full'
        }`}
      >
        <Reveal className="ts-soft mb-8 font-mono text-xs uppercase tracking-[3px] text-gold-bright md:mb-10">
          {eyebrow}
        </Reveal>
        <Reveal delay={120}>
          <p
            className={`ts-md font-source-sans text-base font-light leading-[1.5] text-ink-2 md:text-[27px] md:leading-[1.6] ${
              variant === 'about' ? 'mb-8 max-w-[900px] md:mb-10' : 'max-w-[860px]'
            }`}
          >
            {lead}
          </p>
        </Reveal>
        {lead2 && (
          <Reveal delay={240}>
            <p className="ts-soft max-w-[720px] font-body text-sm leading-[1.9] text-ink-soft md:text-base">
              {lead2}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
