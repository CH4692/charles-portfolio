import { Menu, X } from 'lucide-react';

export default function MenuIcon({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen(): void }) {
  return (
    <button
      type="button"
      className="cursor-pointer md:hidden"
      onClick={setIsOpen}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      {!isOpen && <Menu color="white" size={24} />}
      {isOpen && <X color="white" size={24} />}
    </button>
  );
}
