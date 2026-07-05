import { useEffect } from 'react';
import { useLanguage } from '../context/useLanguage';
import { content } from '../data/content';

interface VimeoModalProps {
  vimeoId: string | null;
  onClose: () => void;
}

export function VimeoModal({ vimeoId, onClose }: VimeoModalProps) {
  const { lang } = useLanguage();
  const t = content[lang].modal;

  useEffect(() => {
    if (!vimeoId) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [vimeoId, onClose]);

  if (!vimeoId) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={t.close}
        className="absolute right-4 top-4 border-0 bg-transparent text-3xl leading-none text-ink transition-colors hover:text-gold md:right-8 md:top-8"
      >
        &times;
      </button>
      <div className="aspect-video w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
          className="h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={t.player}
        />
      </div>
    </div>
  );
}
