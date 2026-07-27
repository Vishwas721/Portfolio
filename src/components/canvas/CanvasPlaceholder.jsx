export default function CanvasPlaceholder() {
  return (
    <div className="flex h-64 w-full items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-900/80 p-6 shadow-[0_0_0_1px_rgba(34,211,238,0.12),0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="flex h-full w-full flex-col items-center justify-center rounded-xl border border-dashed border-cyan-300/40 bg-slate-950/60 text-center">
        <div className="mb-2 text-xs uppercase tracking-[0.35em] text-cyan-300/70">
          3D Canvas Host
        </div>
        <div className="text-sm text-slate-300">
          Placeholder for the future engine mount point
        </div>
      </div>
    </div>
  );
}