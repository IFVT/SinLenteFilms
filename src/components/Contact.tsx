import { useLanguage } from '../context/useLanguage';
import { content } from '../data/content';
import { Reveal } from './Reveal';

export function Contact() {
  const { lang } = useLanguage();
  const t = content[lang].contact;

  const people = [
    { name: 'Fernando García Arias', role: t.roles.director, tel: '+57 311 446 0214' },
    { name: 'Andrés Mauricio Vergara', role: t.roles.producer, tel: '+57 310 315 5364' },
  ];

  return (
    <footer
      id="contact"
      className="border-t border-line bg-bg-panel px-6 py-20 text-center md:px-[120px] md:py-[110px] md:pb-[120px]"
    >
      <Reveal className="mb-6 font-mono text-xs uppercase tracking-[3px] text-gold md:mb-[30px]">{t.eyebrow}</Reveal>
      <Reveal delay={120}>
        <a
          href="mailto:Sinlentecine@gmail.com"
          className="select-text break-words font-body text-2xl text-ink transition-colors hover:text-gold md:text-[44px]"
        >
          Sinlentecine@gmail.com
        </a>
      </Reveal>
      <Reveal delay={240} className="mt-10 flex flex-col items-center justify-center gap-8 md:mt-[54px] md:flex-row md:gap-[90px]">
        {people.map((person) => (
          <div key={person.name}>
            <div className="font-body text-lg text-ink-2 md:text-2xl">{person.name}</div>
            <div className="my-1.5 text-xs text-ink-mut md:text-[13px]">{person.role}</div>
            <div className="select-text font-mono text-xs text-ink-tel md:text-[13px]">{person.tel}</div>
          </div>
        ))}
      </Reveal>
      <div className="mt-16 font-mono text-[10px] tracking-[1px] text-ink-copy md:mt-20 md:text-[11px]">
        {t.copyright}
      </div>
    </footer>
  );
}
