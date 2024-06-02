import { getProductsByIds } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";

function useProductsByIds(ids: number[]) {
  const {
    data,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["productDetail", ids],
    queryFn: () => getProductsByIds(ids),
  });

  return { data, isLoading, error };
}

export { useProductsByIds };
