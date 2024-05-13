import { getProductById } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";

function useProductById(id: number) {
  const {
    data,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["productDetail", id],
    queryFn: () => getProductById(id),
  });

  return { productDetail: data ? data[0] : undefined, isLoading, error };
}

export { useProductById };
