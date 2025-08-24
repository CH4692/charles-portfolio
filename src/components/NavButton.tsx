export default function NavButton({ children }: { children: string }) {
  return (
    <button
      className="text-white h-full font-medium transition duration-400 ease-in-out hover:text-primary cursor-pointer"
      type="button"
    >
      {children}
    </button>
  );
}
