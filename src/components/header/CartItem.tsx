import { useProductById } from "@/hooks/useProductById";
import { Card } from "../ui/card";
import { cartItem, useCart } from "@/contexts/CartContext";
import { Button } from "../ui/button";
import TrashIcon from "../icons/TrashIcon";

function CartItem({ productId, quantity }: cartItem) {
  const { productDetail } = useProductById(productId);
  const { increaseItemQuantity, decreaseItemQuantity, removeItem } = useCart();

  if (!productDetail) return null;

  return (
    <Card className="flex items-center gap-x-3 p-2">
      <img
        src={productDetail.image}
        alt={productDetail.name}
        className="aspect-square rounded object-cover"
        height={80}
        width={80}
      />

      <div className="space-y-2">
        <div>
          <div className="text-base font-medium">{productDetail.name}</div>
          <div className="text-sm text-foreground/60">
            &#36;
            {(quantity *
              Math.floor(
                productDetail.price * (100 - productDetail.saleRatio),
              )) /
              100}
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <div className="flex items-center gap-x-2">
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() => decreaseItemQuantity(productId)}
            >
              -
            </Button>

            <span className="text-sm">{quantity}</span>

            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() => increaseItemQuantity(productId)}
            >
              +
            </Button>
          </div>

          <Button
            className="p-2"
            variant={"outline"}
            size={"sm"}
            onClick={() => removeItem(productId)}
          >
            <TrashIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
}

export default CartItem;
