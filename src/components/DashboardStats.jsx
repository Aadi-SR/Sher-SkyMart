import { Package, TrendingUp, Star, Tag } from "lucide-react";

const STATS = [
  {
    icon: Package,
    iconBg: "bg-[#3a4a12]",
    iconColor: "text-[#CFFF04]",
    valuePrefix: "",
    label: "Cart Items",
    sublabel: "In your bag",
    key: "cartItems",
  },
  {
    icon: TrendingUp,
    iconBg: "bg-[#12233f]",
    iconColor: "text-sky-400",
    valuePrefix: "$",
    label: "Cart Value",
    sublabel: "Ready to checkout",
    key: "cartValue",
  },
  {
    icon: Star,
    iconBg: "bg-[#3f2c10]",
    iconColor: "text-amber-400",
    valuePrefix: "",
    label: "Top Products",
    sublabel: "Highly rated",
    key: "topProducts",
  },
  {
    icon: Tag,
    iconBg: "bg-[#2c1a3f]",
    iconColor: "text-purple-400",
    valuePrefix: "",
    label: "Categories",
    sublabel: "To explore",
    key: "categories",
  },
];

export default function DashboardStats({
  cartItems = 0,
  cartValue = "0.00",
  topProducts = 0,
  categories = 0,
}) {
  const values = { cartItems, cartValue, topProducts, categories };

  return (
    <div className="grid grid-cols-1 gap-4 syne-font sm:grid-cols-2 lg:grid-cols-4 mt-10">
      {STATS.map(({ icon: Icon, iconBg, iconColor, valuePrefix, label, sublabel, key }) => (
        <div
          key={key}
          className="rounded-2xl border border-white bg-[#0f0f0f] p-5"
        >
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}>
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>
          <p className="mt-4 text-3xl font-bold text-white">
            {valuePrefix}
            {values[key]}
          </p>
          <p className="mt-1 text-md text-white/70">{label}</p>
          <p className="text-md text-white/40">{sublabel}</p>
        </div>
      ))}
    </div>
  );
}