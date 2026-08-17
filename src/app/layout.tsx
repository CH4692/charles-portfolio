import './globals.css';

type Props = { children: React.ReactNode };

/** Root shell — locale-specific html/body live in `[locale]/layout`. */
export default function RootLayout({ children }: Props) {
  return children;
}
