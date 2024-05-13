import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

function ProductSkeleton() {
  return (
    <Card className="overflow-hidden rounded-lg bg-white shadow-md">
      <Skeleton className="aspect-square w-full object-cover" />

      <CardContent className="p-4 underline-offset-2">
        <Skeleton className="mb-2 h-7 w-40 rounded-lg" />
        <Skeleton className="h-6 w-full" />
      </CardContent>

      <CardFooter className="flex items-center justify-between px-4">
        <Skeleton className="h-10 w-28 rounded-lg" />
        <Button disabled>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}

export default ProductSkeleton;
