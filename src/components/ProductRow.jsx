import { ShoppingBag } from "lucide-react";

export default function ProductRow({ image, price, onAdd }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-100 p-3">
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-gray-100">
        {image && (
          <img src={image} alt="" className="h-full w-full object-cover" />
        )}
      </div>
      <span className="flex-1 font-bold text-[#8fae00]">${price}</span>
      <button
        type="button"
        onClick={onAdd}
        aria-label="Add to bag"
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f4f9d8] text-[#8fae00] transition-colors hover:bg-[#e9f4b0]"
      >
        <ShoppingBag className="h-4.5 w-4.5" />
      </button>
    </div>
  );
}