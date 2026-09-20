import { Star, Zap } from "lucide-react";
import ProductListPanel from "./ProductListPanel";

const TOP_RATED = [
  { id: 1, price: "599.99", image: null },
  { id: 2, price: "199.99", image: null },
  { id: 3, price: "349.99", image: null },
  { id: 4, price: "49.99", image: null },
  { id: 5, price: "149.99", image: null },
];

const NEW_ARRIVALS = [
  { id: 1, price: "99.99", image: null },
  { id: 2, price: "299.99", image: null },
  { id: 3, price: "24.99", image: null },
  { id: 4, price: "199.99", image: null },
  { id: 5, price: "34.99", image: null },
];

export default function ProductHighlights({
  topRated = TOP_RATED,
  newArrivals = NEW_ARRIVALS,
  onSeeAllTopRated,
  onSeeAllNewArrivals,
  onAddProduct,
}) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <ProductListPanel
        icon={Star}
        iconColor="text-amber-400"
        title="Top Rated"
        products={topRated}
        onSeeAll={onSeeAllTopRated}
        onAddProduct={onAddProduct}
      />
      <ProductListPanel
        icon={Zap}
        iconColor="text-[#CFFF04]"
        title="New Arrivals"
        products={newArrivals}
        onSeeAll={onSeeAllNewArrivals}
        onAddProduct={onAddProduct}
      />
    </div>
  );
}