import ProductCard from "./ProductCard";

export default function ProductGrid({ products = [] }) {
  return (
    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {products.map((product) => {
        const imageUrl = product.images?.[0] ?? product.image ?? null;

        return (
          <ProductCard
            key={product.id}
            id={product.id}
            image={imageUrl}
            category={product.category}
            name={product.name ?? product.title}
            rating={product.rating ?? 0}
            reviewCount={product.reviewCount ?? product.reviews?.length ?? 0}
            price={product.price}
            // onAdd={() => onAddProduct?.(product)}
          />
        );
      })}
    </div>
  );
}