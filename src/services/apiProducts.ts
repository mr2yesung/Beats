import supabase from "./supabase";

type ProductCard = {
  id: number;
  name: string;
  image: string;
  saleRatio: number;
  price: number;
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

export { getFeaturedProducts, type ProductCard };
