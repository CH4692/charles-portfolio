export default function NavButton({ children }: { children: string }) {
  return (
    <button
      className="text-white font-medium transition duration-400 ease-in-out hover:text-primary "
      type="button"
    >
      {children}
    </button>
  );
}
