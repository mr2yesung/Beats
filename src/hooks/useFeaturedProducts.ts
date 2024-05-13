import { getFeaturedProducts } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";

function useFeaturedProducts() {
  const {
    data: featuredProducts,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: getFeaturedProducts,
  });

  return { featuredProducts, isLoading, error };
}

export { useFeaturedProducts };
