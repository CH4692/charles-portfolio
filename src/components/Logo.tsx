import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ width, height }: { width: number; height: number }) {
  return (
    <div>
      <Link href="/">
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
