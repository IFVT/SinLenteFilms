interface PlayButtonProps {
  size?: 'lg' | 'md';
}

export function PlayButton({ size = 'md' }: PlayButtonProps) {
  const dims = size === 'lg' ? 'w-16 h-16 md:w-[92px] md:h-[92px]' : 'w-14 h-14 md:w-[74px] md:h-[74px]';
  const triSize = size === 'lg' ? 'w-4 h-4 md:w-6 md:h-6' : 'w-3.5 h-3.5 md:w-5 md:h-5';

  return (
    <span
      className={`flex items-center justify-center rounded-full border-[1.5px] border-white/90 bg-black/25 backdrop-blur-[2px] ${dims}`}
    >
      <svg viewBox="0 0 24 24" className={`translate-x-0.5 fill-white ${triSize}`} aria-hidden="true">
        <path d="M6 4l14 8-14 8z" />
      </svg>
    </span>
  );
}
