import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image
        alt="Logo"
        width={48}
        height={48}
        className="transition duration-300 ease-in-out hover:scale-115 "
        src="/brand/Logo_standard.png"
      />
    </div>
  );
}
