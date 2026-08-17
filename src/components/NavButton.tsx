export default function NavButton({
  children,
  onClick,
  ...rest
}: {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="hover:text-primary h-full cursor-pointer font-medium text-white transition duration-400 ease-in-out hover:scale-110 hover:font-semibold"
      type="button"
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
