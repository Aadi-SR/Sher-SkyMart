import { Search, ChevronDown } from "lucide-react";

const DEFAULT_CATEGORIES = [
  "All Categories",
  "Electronics",
  "Clothing",
  "Furniture",
  "Home",
  "Sports",
  "Accessories",
];

const DEFAULT_SORT_OPTIONS = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
  "Newest",
  "Top Rated",
];

export default function ProductsHeader() {
  
  return (
    <div className="dm-sans-font">
      <h1 className="text-4xl font-extrabold text-white">All Products</h1>
      <p className="mt-2 text-white/50">product count//  products found</p>

      <div className="mt-6 flex flex-col gap-3 rounded-3xl border border-white/15 p-4 sm:flex-row sm:items-center">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-white/40" />
          <input
            type="text"
            // value={searchValue}
            // onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-2xl border border-white/10 bg-[#161616] py-3.5 pl-11 pr-4 text-white placeholder-white/40 outline-none transition-colors focus:border-[#CFFF04]/50"
          />
        </div>

        {/* Category filter */}
        <div className="relative">
          <select
            // value={category}
            // onChange={(e) => onCategoryChange?.(e.target.value)}
            className="w-full appearance-none rounded-2xl border border-white/10 bg-[#161616] py-3.5 pl-4 pr-10 font-medium text-white outline-none transition-colors focus:border-[#CFFF04]/50 sm:w-48"
          >
            {/* {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))} */}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
        </div>

        {/* Sort filter */}
        <div className="relative">
          <select
            // value={sortBy}
            // onChange={(e) => onSortChange?.(e.target.value)}
            className="w-full appearance-none rounded-2xl border border-white/10 bg-[#161616] py-3.5 pl-4 pr-10 font-medium text-white outline-none transition-colors focus:border-[#CFFF04]/50 sm:w-44"
          >
            {/* {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))} */}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
        </div>
      </div>
    </div>
  );
}