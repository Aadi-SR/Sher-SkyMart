import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import API from "../config/api";

// export const useProducts = () => {
//   return useQuery({
//     queryKey: ["products"],
//     queryFn: async () => {
//       const response = await API.get("/products");
//       return response.data;
//     },

//     staleTime: 5 * 60 * 1000,
//     gcTime: 30 * 60 * 1000,
//   });
// };

export const useProducts = () => {

  const getProducts = async ({ pageParam = 0 }) => {
    const response = await API.get(`/products?limit=20&skip=${pageParam}`);
    return response.data;
  };
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,

    initialPageParam : 0,

    getNextPageParam : (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      if (nextSkip >= lastPage.total) {
        return undefined;
      }
      return nextSkip;
    },

    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};

export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const response = await API.get(`/products/${id}`);
      return response.data;
    },
    staleTime: 5 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
};

export const useGetTotalProduct = () => {
  let {data} = useQuery({
    queryKey: ["productCount"],
    queryFn: async () =>{
      let response = await API.get("/products")
      return response.data;
    }
  })
  return data?.total
}