import { DeliveryStatus } from "@/services/apiOrders";
import DeliveryStatusBadge from "./DeliveryStatusBadge";
import { useProductsByIds } from "@/hooks/useProductsByIds";
import OrderTableCell from "./OrderTableCell";

type OrderRowProps = {
  orderId: number;
  orderDate: Date;
  items: { productId: number; quantity: number }[];
  totalPrice: number;
  status: DeliveryStatus;
};

function OrderRow({
  orderId,
  orderDate,
  items,
  totalPrice,
  status,
}: OrderRowProps) {
  const { data: orderItems } = useProductsByIds(
    items.map((item) => item.productId),
  );

  return (
    <tr className="border-b border-primary/10">
      <OrderTableCell>&#35;{orderId}</OrderTableCell>
      <OrderTableCell>{orderDate.toLocaleDateString()}</OrderTableCell>
      <OrderTableCell>
        <div className="space-y-2">
          {orderItems &&
            orderItems.map((item) => (
              <div className="flex items-center space-x-3" key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="hidden aspect-square rounded object-cover md:block"
                  height={40}
                  width={40}
                />
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-foreground/60">
                    Quantity:{" "}
                    {items.find((i) => i.productId === item.id)?.quantity}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </OrderTableCell>
      <OrderTableCell className="font-medium">&#36;{totalPrice}</OrderTableCell>
      <OrderTableCell>
        <DeliveryStatusBadge status={status} />
      </OrderTableCell>
    </tr>
  );
}

export default OrderRow;
