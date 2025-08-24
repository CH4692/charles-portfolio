import { ReactElement } from "react";

export default function CvButton({
  name,
  icon,
}: {
  name: string;
  icon?: ReactElement;
}) {
  return (
    <button className="text-white flex gap-3 justify-center items-center px-5 py-2 font-medium transition duration-400 ease-in-out cursor-pointer hover:scale-105 bg-cv-btn rounded-lg border-border border-1">
      {icon}
      {name}
    </button>
  );
}
