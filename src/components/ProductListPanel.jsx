import { ArrowRight } from "lucide-react";
import ProductRow from "./ProductRow";

export default function ProductListPanel({
  icon: Icon,
  iconColor = "text-amber-400",
  title,
  products = [],
  onSeeAll,
  onAddProduct,
}) {
  return (
    <div className="rounded-3xl mt-10 bg-white p-6 sm:p-7">
      <div className="mb-5 flex items-center justify-between ">
        <div className="flex items-center gap-2">
          <Icon className={`h-5 w-5 ${iconColor}`} fill="currentColor" />
          <h3 className="text-lg font-extrabold text-gray-900">{title}</h3>
        </div>
        <button
          type="button"
          onClick={onSeeAll}
          className="group flex items-center gap-1 text-sm font-semibold text-[#8fae00] hover:underline"
        >
          See all
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="space-y-3">
        {products.map((product) => (
          <ProductRow
            key={product.id}
            image={product.image}
            price={product.price}
            onAdd={() => onAddProduct?.(product)}
          />
        ))}
      </div>
    </div>
  );
}