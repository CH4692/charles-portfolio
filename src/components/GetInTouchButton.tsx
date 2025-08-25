import { ReactElement } from 'react';

export default function GetInTouchButton({
  name,
  icon,
  addClass,
}: {
  name: string;
  icon?: ReactElement;
  addClass?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  function onClickeHandler(e: React.MouseEvent<HTMLButtonElement>) {
    const navEl = document.getElementById('contact');
    navEl?.scrollIntoView();
  }
  return (
    <button
      onClick={onClickeHandler}
      className={`text-background hover:shadow-primary border-primary cursor-pointer rounded-lg border-1 bg-gradient-to-br px-5 py-2 font-medium text-white shadow-2xl/70 transition duration-400 ease-in-out hover:scale-105 ${addClass}`}
    >
      {name}
      {icon}
    </button>
  );
}
