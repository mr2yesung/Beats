import { useCart } from "@/contexts/CartContext";
import { Button } from "./ui/button";

type ButtonAddCartProps = {
  id: number;
};

function ButtonAddCart({ id }: ButtonAddCartProps) {
  const { increaseItemQuantity, setIsCartOpen } = useCart();

  function addItemToCart() {
    increaseItemQuantity(id);
    setIsCartOpen(true);
  }

  return <Button onClick={addItemToCart}>Add to Cart</Button>;
}

export default ButtonAddCart;
