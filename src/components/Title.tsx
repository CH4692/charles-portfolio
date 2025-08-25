export default function Title({ children }: { children: string }) {
  return (
    <div className="text-primary border-primary mt-5 inline-flex h-6 items-center justify-center rounded-full border px-3 text-xs font-bold">
      {children}
    </div>
  );
}
