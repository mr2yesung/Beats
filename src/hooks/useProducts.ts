import { useQuery } from "@tanstack/react-query";
import { useFilterProfile } from "./useFilterProfile";
import { useFilterSwitchType } from "./useFilterSwitchType";
import { getProductsByFilter } from "@/services/apiProducts";

function useProducts() {
  const { filterProfile } = useFilterProfile();
  const { filterSwitchType } = useFilterSwitchType();

  const {
    data: products,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["products", filterProfile, filterSwitchType],
    queryFn: () => getProductsByFilter(filterProfile, filterSwitchType),
  });

  return { products, isLoading, error };
}

export { useProducts };
