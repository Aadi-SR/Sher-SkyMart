import React from "react";
import ProductsHeader from "../components/ProductsHeader";
import ProductGrid from "../components/ProductGrid";
import { useProducts } from "../hooks/ProductHooks";
import {useEffect} from "react"

const Shop = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useProducts();

  useEffect(() => {
    const handleScroll = () => {
      const reachedBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 200;

      if (reachedBottom && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  const products = data?.pages.flatMap((page) => page.products);

  

  return (
    <div className="mt-32">
      <ProductsHeader />
      <ProductGrid products={products} />
    </div>
  );
};

export default Shop;
