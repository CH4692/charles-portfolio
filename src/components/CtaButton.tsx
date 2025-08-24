import { ReactElement } from "react";

export default function CtaButton({
  name,
  icon,
  addClass,
}: {
  name: string;
  icon?: ReactElement;
  addClass?: string;
}) {
  return (
    <button
      className={`text-background px-5 py-2 font-medium transition duration-400 ease-in-out cursor-pointer hover:scale-105  shadow-2xl/70 hover:shadow-primary bg-gradient-to-br from-primary to-cta-grad-end rounded-lg ${addClass}`}
    >
      {name}
      {icon}
    </button>
  );
}
