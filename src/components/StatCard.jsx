export default function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/15 px-6 py-5 text-center transition-colors hover:border-white/30 font-['DM Sans']">
      <p className="text-2xl font-extrabold text-[#CFFF04]">{value}</p>
      <p className="mt-1 text-sm text-white/50">{label}</p>
    </div>
  );
}