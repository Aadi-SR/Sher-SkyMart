import { useState } from "react";
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import PerkCard from "../components/PerkCard";
import { useParams } from "react-router";
import { useGetTotalProduct, useProduct } from "../hooks/ProductHooks";
import { useNavigate } from "react-router";

const PERKS = [
  { icon: Truck, title: "Free Delivery", subtitle: "On orders $50+" },
  { icon: ShieldCheck, title: "Secure Pay", subtitle: "256-bit SSL" },
  { icon: RotateCcw, title: "Easy Returns", subtitle: "30-day policy" },
];

export default function ProductDetail({ productCount }) {
  const { id } = useParams();
  const { data, isLoading, error } = useProduct(id);
  const [wishlisted, setWishlisted] = useState(false);

  const navigate = useNavigate();

  const totalProductCount = useGetTotalProduct()

  console.log(data);
  console.log(totalProductCount);

  const goPrevious = () => {
    const currentId = Number(id);

    if (currentId > 1) {
      navigate(`/main/product/${currentId - 1}`);
    }
  };

  const goNext = () => {
    const currentId = Number(id);

    if (currentId < totalProductCount) {
      navigate(`/main/product/${currentId + 1}`);
    }
  };

  if (isLoading ) {
    return <h1>Loading</h1>;
  }

  if (!data) {
    return <h1>Product not found</h1>;
  }

  const productName = data.name ?? data.title;
  const imageUrl = data.images?.[0] ?? data.image ?? null;
  const filledStars = Math.round(data.rating ?? 0);
  const reviewCount = data.reviewCount ?? data.reviews?.length ?? 0;

  return (
    <div className="mx-auto max-w-6xl px-6 py-10 dm-sans-font">
      {/* Breadcrumb */}
      <button
        type="button"
        // onClick={onBack}
        className="mb-6 flex items-center gap-2 text-sm text-white/40 hover:text-white/70"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Products</span>
        <span>/</span>
        <span>{data.category}</span>
        <span>/</span>
        <span className="text-white/80">{productName}</span>
      </button>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="flex items-center justify-center rounded-3xl bg-white p-8">
          <div className="h-96 w-full overflow-hidden rounded-2xl bg-gray-100">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={productName}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>

        {/* Info */}
        <div>
          <span className="inline-block rounded-full border border-[#CFFF04]/30 bg-[#CFFF04]/10 px-4 py-1 text-sm font-semibold text-[#CFFF04]">
            {data.category}
          </span>

          <h1 className="mt-4 text-4xl font-extrabold text-white">
            {productName}
          </h1>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4.5 w-4.5 ${
                    i < filledStars
                      ? "fill-amber-400 text-amber-400"
                      : "fill-transparent text-white/25"
                  }`}
                />
              ))}
            </div>
            <span className="font-bold text-white">{data.rating}</span>
            <span className="text-white/40">({reviewCount} reviews)</span>
          </div>

          <div className="my-5 border-t border-white/10" />

          <p className="text-4xl font-bold text-[#CFFF04] syne-font">
            ${data.price}
          </p>

          <div className="my-5 border-t border-white/10" />

          <p className="text-white/50">{data.description}</p>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              //   onClick={onAddToCart}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#CFFF04] py-4 font-bold text-black transition-transform hover:brightness-95 active:scale-[0.99]"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
            <button
              type="button"
              //   onClick={handleWishlist}
              aria-label="Toggle wishlist"
              className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border border-white/15 text-white/70 transition-colors hover:bg-white/5"
            >
              <Heart
                className={`h-5 w-5 ${wishlisted ? "fill-[#CFFF04] text-[#CFFF04]" : ""}`}
              />
            </button>
          </div>

          {/* Perks */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {PERKS.map((perk) => (
              <PerkCard key={perk.title} {...perk} />
            ))}
          </div>

          {/* Prev / Next */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              onClick={goPrevious}
              disabled={Number(id) === 1}
              type="button"
              //   onClick={onPrevious}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-white/5 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 cursor-pointer"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
            <button
              type="button"
              onClick={goNext}
              className="flex items-center justify-center gap-1.5 rounded-xl bg-[#CFFF04] py-3.5 font-bold text-black transition-transform hover:brightness-95 active:scale-[0.99] cursor-pointer"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
