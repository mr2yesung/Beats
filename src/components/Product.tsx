import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { ProductCard } from "@/services/apiProducts";

function Product({ id, image, name, price, saleRatio }: ProductCard) {
  const navigate = useNavigate();

  function handleNavigateProductPage() {
    navigate(`/product/${id}`);
  }

  return (
    <Card className="overflow-hidden rounded-lg bg-white shadow-md">
      <img
        src={image}
        alt={name}
        onClick={handleNavigateProductPage}
        className="aspect-square w-full object-cover"
      />

      <CardContent
        className="p-4 underline-offset-2 hover:cursor-pointer hover:underline"
        onClick={handleNavigateProductPage}
      >
        <h3 className="mb-2 text-lg font-semibold">{name}</h3>
        <p className="text-foreground/60">
          Experience the ultimate gaming performance with our state-of-the-art
          mechanical keyboard.
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between px-4">
        <span className="text-xl font-semibold">
          &#36;{Math.floor(price * (100 - saleRatio)) / 100}
        </span>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

export default Product;
