import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

type ItemProps = {
  id: number;
  imageSrc: string;
  name: string;
  price: number;
};

function Item({ id, imageSrc, name, price }: ItemProps) {
  const navigate = useNavigate();

  function handleNavigateProductPage() {
    navigate(`/product/${id}`);
  }

  return (
    <Card className="overflow-hidden rounded-lg bg-white shadow-md">
      <img src={imageSrc} alt={name} onClick={handleNavigateProductPage} />

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

      <CardFooter className="flex items-center justify-between">
        <span className="text-xl font-semibold">&#36;{price}</span>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

export default Item;
