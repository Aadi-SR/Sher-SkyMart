export default function ValueCard({ icon: Icon, iconBg, iconColor, title, description }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/15 p-5">
      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
        <Icon className={`h-4.5 w-4.5 ${iconColor}`} />
      </div>
      <div>
        <p className="font-bold text-white">{title}</p>
        <p className="mt-1 text-sm text-white/50">{description}</p>
      </div>
    </div>
  );
}