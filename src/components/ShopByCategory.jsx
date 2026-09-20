import { ArrowRight } from "lucide-react";
import CategoryCard from "./CategoryCard";
import { useState } from "react";

const DEFAULT_CATEGORIES = [
  { name: "Electronics", icon: "💻", itemCount: 17 },
  { name: "Clothing", icon: "👕", itemCount: 2 },
  { name: "Furniture", icon: "🪑", itemCount: 3 },
  { name: "Home", icon: "🏠", itemCount: 14 },
  { name: "Sports", icon: "🏀", itemCount: 8 },
  { name: "Accessories", icon: "👜", itemCount: 6 },
];

export default function ShopByCategory() {

    const [categories, setCategories] = useState([...DEFAULT_CATEGORIES])
  return (
    <section className=" mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold  syne-font text-white">Shop by Category</h2>
        <button
          type="button"
          className="group flex items-center gap-1.5 font-semibold text-[#CFFF04] hover:underline"
        >
          View All
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            icon={category.icon}
            name={category.name}
            itemCount={category.itemCount}
          />
        ))}
      </div>
    </section>
  );
}