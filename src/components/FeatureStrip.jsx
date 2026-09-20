import { Zap, ShieldCheck, Tag } from "lucide-react";

const FEATURES = [
  {
    icon: Zap,
    iconColor: "text-[#CFFF04]",
    title: "Fast Delivery",
    subtitle: "Same-day on select items",
  },
  {
    icon: ShieldCheck,
    iconColor: "text-sky-400",
    title: "Secure Payments",
    subtitle: "100% encrypted checkout",
  },
  {
    icon: Tag,
    iconColor: "text-emerald-400",
    title: "Best Prices",
    subtitle: "Price-match guarantee",
  },
];

export default function FeatureStrip() {
  return (
    <div className="grid grid-cols-1 gap-4 font-[Poppins] sm:grid-cols-3 mt-10">
      {FEATURES.map(({ icon: Icon, iconColor, title, subtitle }) => (
        <div
          key={title}
          className="flex items-center gap-3 rounded-2xl border border-white/15 px-6 py-5"
        >
          <Icon className={`h-6 w-6 shrink-0 ${iconColor}`} />
          <div>
            <p className="font-bold text-white">{title}</p>
            <p className="text-sm text-white/50">{subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}