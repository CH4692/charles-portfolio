export default function NavButton({ children }: { children: string }) {
  return (
    <button
      className="text-white h-full font-medium transition duration-400 ease-in-out hover:font-semibold hover:scale-110 hover:text-primary cursor-pointer"
      type="button"
    >
      {children}
    </button>
  );
}
