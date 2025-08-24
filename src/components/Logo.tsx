import Image from "next/image";

export default function Logo({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <div>
      <Image
        alt="Logo"
        width={width}
        height={height}
        className="transition duration-300 ease-in-out hover:scale-115 cursor-pointer"
        src="/brand/Logo_standard2.png"
      />
    </div>
  );
}
