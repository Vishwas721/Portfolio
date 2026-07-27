export default function MainLayout({ children }) {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_40%),linear-gradient(to_bottom,_rgba(15,23,42,0.96),_rgba(2,6,23,1))]" />

      <div className="relative z-10 flex h-full w-full flex-col">
        {children}
      </div>
    </div>
  );
}