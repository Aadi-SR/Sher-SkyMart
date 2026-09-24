import { useState } from "react";
import { Star, ShoppingCart, Check } from "lucide-react";
import { NavLink } from "react-router";

export default function ProductCard({
  id,
  image,
  category,
  name,
  rating = 0,
  reviewCount = 0,
  price,
  onAdd,
}) {
  const [added, setAdded] = useState(false);
  const filledStars = Math.round(rating);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleAdd = () => {
    setAdded(true);
    onAdd?.();
  };

  return (
    <NavLink
      to={`/main/product/${id}`}
      className="flex flex-col overflow-hidden rounded-2xl bg-white dm-sans-font border-2 border-white hover:scale-105  ease-out duration-200"
    >
      {/* Image */}
      <div className="relative">
        <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
          {capitalize(category)}
        </span>
        <div className="h-56 w-full bg-gray-100">
          {image && (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col bg-black p-5">
        <p className="text-sm text-white/40">{capitalize(category)}</p>
        <h3 className="mt-1 font-bold leading-snug text-white">{name}</h3>

        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < filledStars
                    ? "fill-amber-400 text-amber-400"
                    : "fill-transparent text-white/25"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-white/40">({reviewCount})</span>
        </div>

        <div className="mt-3 border-t border-white/10 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[#CFFF04] syne-font">
              ${price}
            </span>
            <button
              type="button"
              onClick={handleAdd}
              disabled={added}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-bold transition-colors ${
                added
                  ? "bg-emerald-900/40 text-emerald-400"
                  : "bg-[#CFFF04] text-black hover:brightness-95"
              }`}
            >
              {added ? (
                <>
                  <Check className="h-4 w-4" /> Added
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" /> Add
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
