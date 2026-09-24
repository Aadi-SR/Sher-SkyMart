export default function PerkCard({ icon: Icon, title, subtitle }) {
  return (
    <div className="rounded-2xl border border-white/15 px-4 py-4 text-center">
      <Icon className="mx-auto h-5 w-5 text-[#CFFF04]" />
      <p className="mt-2 text-sm font-bold text-white">{title}</p>
      <p className="mt-0.5 text-xs text-white/40">{subtitle}</p>
    </div>
  );
}