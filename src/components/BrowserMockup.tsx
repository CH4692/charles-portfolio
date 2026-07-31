import Image from 'next/image';

type BrowserMockupProps = {
  src: string;
  alt: string;
  url?: string;
  accent?: string;
  accentSecondary?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** When true, fills parent height instead of fixed aspect ratio */
  fillHeight?: boolean;
};

function displayUrl(url?: string) {
  if (!url) return 'charlesheller.dev';
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, '') + (parsed.pathname === '/' ? '' : parsed.pathname);
  } catch {
    return url;
  }
}

export default function BrowserMockup({
  src,
  alt,
  url,
  accent = '#1a3a3a',
  accentSecondary = '#0d1116',
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  className = '',
  fillHeight = false,
}: BrowserMockupProps) {
  return (
    <div
      className={`relative overflow-hidden ${fillHeight ? 'flex h-full min-h-[280px] flex-col' : ''} ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 20% 10%, ${accent} 0%, ${accentSecondary} 55%, #0a0c10 100%)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 80% 90%, rgba(46,245,245,0.12), transparent 50%)',
        }}
      />

      <div
        className={`relative z-10 mx-auto flex w-full flex-col px-3.5 py-5 sm:px-5 sm:py-7 lg:px-6 ${fillHeight ? 'my-auto' : ''}`}
      >
        <div className="overflow-hidden rounded-xl border border-white/15 bg-[#1a1d24] shadow-[0_28px_64px_-14px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.05)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_36px_72px_-14px_rgba(0,0,0,0.75)]">
          <div className="flex items-center gap-3 border-b border-white/8 bg-[#22262f] px-3 py-2.5">
            <div className="flex shrink-0 gap-1.5" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="min-w-0 flex-1 truncate rounded-md bg-black/35 px-2.5 py-1 text-center text-[11px] text-white/55">
              {displayUrl(url)}
            </div>
            <div className="w-10 shrink-0" aria-hidden />
          </div>

          <div className="relative aspect-[16/10] bg-[#0d1116]">
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes={sizes}
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
