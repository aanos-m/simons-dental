import logoPath from "../assets/logo2.png";

type Props = {
  progress?: number;
};

export default function LoadingScreen({ progress = 0 }: Props) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f8fbfd]">
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-36 w-36 animate-pulse items-center justify-center overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-cyan-950/10 ring-1 ring-slate-200">
          <img
            src={logoPath}
            alt="Simon&apos;s Dental logo"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="text-center">
          <p className="text-2xl font-semibold tracking-tight text-slate-950">
            Simon&apos;s Dental
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-cyan-700">
            Loading your smile care
          </p>
        </div>

        <div className="h-1.5 w-48 overflow-hidden rounded-full bg-cyan-100">
          <div
            className="h-full rounded-full bg-cyan-900 transition-all"
            style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
          />
        </div>
      </div>
    </div>
  );
}