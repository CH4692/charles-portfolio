export default function MenuModal({
  menuNames,
  onClick,
  setIsOpen,
}: {
  menuNames: string[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  setIsOpen: () => void;
}) {
  function onClickeHandler() {
    const navEl = document.getElementById('contact');
    navEl?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen();
  }
  return (
    <ul className="bg-card border-border visible mb-4 block rounded-xl border-1 p-4 md:hidden">
      {menuNames.map((name) => (
        <li
          key={name}
          className="border-border hover:text-primary hover:shadow-primary mt-2 h-12 cursor-pointer rounded-xl text-center transition ease-in-out hover:scale-103 hover:border-1 hover:font-semibold hover:shadow-xl/10"
        >
          <button onClick={onClick} className="h-full w-full cursor-pointer">
            {name}
          </button>
        </li>
      ))}

      <li
        onClick={onClickeHandler}
        className="bg-card border-primary hover:shadow-primary mt-2 h-12 cursor-pointer rounded-xl border-1 text-center shadow-xl/20 transition ease-in-out hover:scale-103"
      >
        <button className="h-full cursor-pointer text-center">Get In Touch</button>
      </li>
    </ul>
  );
}
