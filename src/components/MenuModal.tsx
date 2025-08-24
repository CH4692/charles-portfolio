import NavButton from "./NavButton";

export default function MenuModal({ menuNames }: { menuNames: string[] }) {
  return (
    <ul className="block bg-card border-1 border-border rounded-xl p-4 mb-4 visible md:hidden">
      {menuNames.map((name) => (
        <li
          key={name}
          className=" h-12 mt-2 rounded-xl hover:border-1 hover:scale-103 hover:font-semibold border-border transition hover:text-primary ease-in-out hover:shadow-xl/10 hover:shadow-primary text-center cursor-pointer"
        >
          <button className="h-full cursor-pointer">{name}</button>
        </li>
      ))}

      <li className=" h-12 mt-2 bg-card border-1 border-primary hover:scale-103 rounded-xl transition ease-in-out shadow-xl/20 text-center hover:shadow-primary cursor-pointer">
        <button className="text-center h-full cursor-pointer">
          Get In Touch
        </button>
      </li>
    </ul>
  );
}
