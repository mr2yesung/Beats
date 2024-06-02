import { User } from "@supabase/supabase-js";
import { supabaseGetUser } from "./apiAuth";
import supabase from "./supabase";

type DeliveryStatus = "Delivered" | "Shipped" | "Pending";

type ordersFetchData = {
  id: number;
  orderDate: string;
  price: number;
  status: DeliveryStatus;
};

type orderItemsFetchData = {
  orderId: number;
  productId: number;
  quantity: number;
};

type orderPostData = {
  items: { productId: number; quantity: number }[];
  totalPrice: number;
};

async function supabaseCreateOrder(orderData: orderPostData) {
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

async function getOrdersByUser(userId: User["id"]) {
  const { data, error } = await supabase
    .from("orders")
    .select("id,orderDate,price,status")
    .eq("userId", userId)
    .returns<ordersFetchData[]>();

  if (error) throw new Error(error.message);

  return data;
}

async function getOrderItemsByOrderId(orderIds: number[]) {
  const { data, error } = await supabase
    .from("orderItems")
    .select("orderId,productId,quantity")
    .in("orderId", orderIds)
    .returns<orderItemsFetchData[]>();

  if (error) throw new Error(error.message);

  return data;
}

async function getOrders() {
  const user = await supabaseGetUser();
  if (!user?.id) throw new Error("User not found");

  const orders = await getOrdersByUser(user.id);
  if (!orders || orders.length < 1) return [];

  const orderIds = orders.map((order) => order.id);

  const orderItems = await getOrderItemsByOrderId(orderIds);

  const orderData = orders.map((order) => ({
    orderId: order.id,
    orderDate: new Date(order.orderDate),
    totalPrice: order.price,
    status: order.status,
    items: orderItems
      .filter((item) => item.orderId === order.id)
      .map((item) => ({
        productId: item.productId,
        quantity: item.quantity,
      })),
  }));

  orderData.sort((a, b) => b.orderDate.getTime() - a.orderDate.getTime());

  return orderData;
}

export {
  supabaseCreateOrder,
  getOrders,
  type orderPostData,
  type DeliveryStatus,
};
