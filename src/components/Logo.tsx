'use client';

import Image from 'next/image';

import { Link, usePathname } from '@/i18n/navigation';

export default function Logo({ width, height }: { width: number; height: number }) {
  const pathname = usePathname();

  function onClick() {
    if (pathname === '/') {
      document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <div>
      <Link href="/" onClick={onClick}>
        <Image
          alt="Logo"
          width={width}
          height={height}
          className="cursor-pointer transition duration-300 ease-in-out hover:scale-115"
          src="/brand/Logo_standard2.png"
        />
      </Link>
    </div>
  );
}
