import { useState } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Reel } from './components/Reel';
import { Bleed } from './components/Bleed';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { VimeoModal } from './components/VimeoModal';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/useLanguage';
import { content } from './data/content';
import { REEL_VIMEO_ID } from './data/films';
import aboutImg from './assets/frames/about_moon.webp';
import crewImg from './assets/frames/crew_earth.webp';

function AppContent() {
  const [activeVimeoId, setActiveVimeoId] = useState<string | null>(null);
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <>
      <Nav />
      <Hero />
      <Reel onPlay={() => setActiveVimeoId(REEL_VIMEO_ID)} />
      <Bleed
        id="about"
        image={aboutImg}
        eyebrow={t.about.eyebrow}
        variant="about"
        lead={t.about.lead}
        lead2={t.about.lead2}
      />
      <Bleed id="crew" image={crewImg} eyebrow={t.crew.eyebrow} variant="crew" lead={t.crew.lead} />
      <Work onPlay={setActiveVimeoId} />
      <Contact />
      <VimeoModal vimeoId={activeVimeoId} onClose={() => setActiveVimeoId(null)} />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
