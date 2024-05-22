import { useCart } from "@/contexts/CartContext";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import CartIcon from "../icons/CartIcon";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ScrollArea } from "../ui/scroll-area";
import CartItem from "./CartItem";

function Cart() {
  const { cartItems } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"ghost"} className="relative px-2">
          <div className="absolute -top-1 left-3/4 text-xs text-primary">
            {cartItems.length > 0 ? cartItems.length : null}
          </div>
          <CartIcon />
        </Button>
      </SheetTrigger>

      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        {cartItems.length > 0 ? (
          <>
            <ScrollArea type="scroll">
              <div className="flex flex-col gap-y-2">
                {cartItems.map((item) => (
                  <CartItem key={item.productId} {...item} />
                ))}
              </div>
            </ScrollArea>

            <SheetFooter>
              <SheetClose asChild>
                <Button className="w-full" asChild>
                  <Link to={"/checkout"}>Checkout</Link>
                </Button>
              </SheetClose>
            </SheetFooter>
          </>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <div className="mb-4 rounded-full bg-primary/10 p-4">
              <CartIcon />
            </div>
            <p className="text-foreground">Your cart is empty</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default Cart;
