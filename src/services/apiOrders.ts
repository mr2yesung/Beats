import { supabaseGetUser } from "./apiAuth";
import supabase from "./supabase";

type orderData = {
  items: { productId: number; quantity: number }[];
  totalPrice: number;
};

async function supabaseCreateOrder(orderData: orderData) {
  const user = await supabaseGetUser();

  if (!user?.id) throw new Error("User not found");

  const { data: orders, error: ordersError } = await supabase
    .from("orders")
    .insert([
      {
        price: Math.floor(orderData.totalPrice * 100) / 100,
        userId: user.id,
      },
    ])
    .select("id")
    .single();

  if (ordersError) throw new Error(ordersError.message);

  const orderId = orders.id;

  const { error: orderItemsError } = await supabase.from("orderItems").insert(
    orderData.items.map((item) => {
      return {
        orderId,
        productId: item.productId,
        quantity: item.quantity,
      };
    }),
  );

  if (orderItemsError) throw new Error(orderItemsError.message);
}

export { supabaseCreateOrder, type orderData };
