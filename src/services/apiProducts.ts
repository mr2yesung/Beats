import supabase from "./supabase";

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
    .select("*")
    .eq("id", id)
    .returns<ProductDetail[]>();

  if (error) throw new Error(error.message);

  return data;
}

export {
  getFeaturedProducts,
  getProductById,
  type ProductCard,
  type ProductDetail,
};
