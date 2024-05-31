import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/contexts/CartContext";
import { useProductsByIds } from "@/hooks/useProductsByIds";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutItem from "./CheckoutItem";
import { Separator } from "@/components/ui/separator";
import CheckoutPrice from "./CheckoutPrice";

const shippingFee = 9.99;

function Checkout() {
  const { cartItems, setIsCartOpen } = useCart();
  const navigate = useNavigate();
  const { cartData, isLoading } = useProductsByIds(
    cartItems.map((item) => item.productId),
  );
  const { toast } = useToast();

  const checkoutItems = cartData?.map((productDatum) => {
    return {
      name: productDatum.name,
      actualPrice:
        Math.floor(productDatum.price * (100 - productDatum.saleRatio)) / 100,
      image: productDatum.image,
      id: productDatum.id,
      quantity:
        cartItems.find((cartItem) => cartItem.productId === productDatum.id)
          ?.quantity || 0,
    };
  });

  useEffect(
    function () {
      if (cartItems.length < 1) {
        setIsCartOpen(false);
        navigate("/", { replace: true });
      }
    },
    [cartItems, navigate, setIsCartOpen],
  );

  useEffect(
    function () {
      if (!cartData && !isLoading)
        toast({
          variant: "destructive",
          description: "Cart item cannot be found",
        });
    },
    [cartData, isLoading, toast],
  );

  const totalPrice =
    checkoutItems?.reduce(
      (totalPrice, item) => totalPrice + item.actualPrice * item.quantity,
      0,
    ) || 0;

  return (
    <form className="container mx-auto my-12 grid grid-cols-1 gap-12 px-4 md:px-6 lg:grid-cols-2">
      <div>
        <h1 className="mb-6 text-2xl font-bold">Checkout</h1>

        <div className="space-y-6">
          <div>
            <Label htmlFor="shipping-address">Shipping Address</Label>
            <div className="grid grid-cols-2 gap-4">
              <Input id="shipping-address" placeholder="Address" />
              <Input id="shipping-city" placeholder="City" />
              <Input id="shipping-state" placeholder="State" />
              <Input id="shipping-zip" placeholder="Zip Code" />
            </div>
          </div>
          <div>
            <Label htmlFor="billing-name">Billing Information</Label>
            <div className="grid grid-cols-2 gap-4">
              <Input id="billing-name" placeholder="Name on Card" />
              <Input id="billing-number" placeholder="Card Number" />
              <Input id="billing-expiration" placeholder="Expiration Date" />
              <Input id="billing-cvc" placeholder="CVC" />
            </div>
          </div>
          <div>
            <Label htmlFor="payment-method">Payment Method</Label>
            <Select defaultValue="visa">
              <SelectTrigger className="w-full" id="payment-method">
                <SelectValue placeholder="Select a payment method" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="visa">Visa</SelectItem>
                <SelectItem value="mastercard">MasterCard</SelectItem>
                <SelectItem value="paypal">Paypal</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full" type="submit" disabled={!checkoutItems}>
            Place Order
          </Button>
        </div>
      </div>

      {checkoutItems && (
        <div>
          <h2 className="mb-4 text-xl font-bold">Order Summary</h2>

          <Card>
            <CardContent className="space-y-4 p-6">
              {checkoutItems.map((item) => (
                <CheckoutItem key={item.id} {...item} />
              ))}

              <Separator />

              <CheckoutPrice
                title="Subtotal"
                price={Math.floor(totalPrice * 100) / 100}
              />
              <CheckoutPrice title="Shipping" price={shippingFee} />

              <Separator />

              <CheckoutPrice
                title="Total"
                price={Math.floor((totalPrice + shippingFee) * 100) / 100}
                titleClassName="text-lg font-bold"
                priceClassName="text-lg font-bold"
              />
            </CardContent>
          </Card>
        </div>
      )}
    </form>
  );
}

export default Checkout;
