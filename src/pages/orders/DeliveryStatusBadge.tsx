import { Badge } from "@/components/ui/badge";
import { DeliveryStatus } from "@/services/apiOrders";

type DeliveryStatusBadgeProps = {
  status: DeliveryStatus;
};

function DeliveryStatusBadge({ status }: DeliveryStatusBadgeProps) {
  let className = "";

  switch (status) {
    case "Pending":
      className = "text-rose-500";
      break;
    case "Shipped":
      className = "text-amber-500";
      break;
    case "Delivered":
      className = "text-emerald-500";
      break;

    default:
      break;
  }

  return (
    <Badge variant={"outline"} className={className}>
      {status}
    </Badge>
  );
}

export default DeliveryStatusBadge;
