import supabase from "./supabase";
import { profile } from "@/hooks/useFilterProfile";
import { switchType } from "@/hooks/useFilterSwitchType";
import { capitalizeString } from "@/utilities/capitalizeString";

type ProductCard = {
  id: number;
  name: string;
  image: string;
  saleRatio: number;
  price: number;
};

type ProductDetail = ProductCard & {
  keycap: string;
  pollingRate: number;
  switchName: string;
  layout: string;
};

async function getFeaturedProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("id,name,image,price,saleRatio")
    .eq("isFeatured", true)
    .returns<ProductCard[]>();

  if (error) throw new Error(error.message);

  return data;
}

async function getProductById(id: number) {
  const { data, error } = await supabase
    .from("products")
    .select(
      "id,name,image,price,saleRatio,keycap,pollingRate,switchName,layout",
    )
    .eq("id", id)
    .returns<ProductDetail[]>();

  if (error) throw new Error(error.message);

  return data;
}

async function getProductsByFilter(
  filterProfile: string,
  filterSwitchType: string,
) {
  let query = supabase.from("products").select("id,name,image,price,saleRatio");

  if (
    Object.values<string>(profile).includes(filterProfile) &&
    filterProfile !== profile.all
  )
    query = query.eq("isLowProfile", filterProfile === profile.low);

  if (
    Object.values<string>(switchType).includes(filterSwitchType) &&
    filterSwitchType !== switchType.all
  )
    query = query.eq("switchType", capitalizeString(filterSwitchType));

  const { data, error } = await query.returns<ProductCard[]>();

  if (error) throw new Error(error.message);

  return data;
}

export {
  getFeaturedProducts,
  getProductById,
  getProductsByFilter,
  type ProductCard,
  type ProductDetail,
};
