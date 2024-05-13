import { Button } from "@/components/ui/button";
import { Navigate, useParams } from "react-router-dom";
import { useProductById } from "@/hooks/useProductById";
import CheckIcon from "@/components/icons/CheckIcon";
import Loading from "@/components/Loading";

function ProductDetail() {
  const { productId } = useParams();
  const { productDetail, isLoading } = useProductById(
    productId ? parseInt(productId) : 0,
  );

  if (isLoading) return <Loading />;

  if (!productDetail) return <Navigate to="/not-found" replace />;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-12 md:px-6 md:py-20">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <img
            src={productDetail.image}
            alt={productDetail.name}
            className="rounded-lg object-cover"
            height={600}
            width={800}
          />
        </div>
        <div className="order-1 space-y-4 md:order-2">
          <h1 className="text-4xl font-bold">{productDetail.name}</h1>
          <p className="text-lg text-foreground/60">
            Experience the ultimate gaming performance with our state-of-the-art
            mechanical keyboard.
          </p>
          <div className="flex gap-4">
            <Button>Add to Cart</Button>
            <Button variant="outline">Buy Now</Button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Product Details</h2>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Specifications</h3>
            <ul className="space-y-1 text-foreground/60">
              <li>
                <span className="font-medium text-foreground">Switches: </span>
                {productDetail.switchName}
              </li>
              <li>
                <span className="font-medium text-foreground">Keycaps: </span>
                {productDetail.keycap}
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Polling Rate:{" "}
                </span>
                {productDetail.pollingRate}Hz
              </li>
              <li>
                <span className="font-medium text-foreground">Layout: </span>
                {productDetail.layout}&#37;
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Features</h3>
            <ul className="space-y-1 text-foreground/60">
              <li>
                <CheckIcon />
                Mechanical switches for precise and responsive typing
              </li>
              <li>
                <CheckIcon />
                Customizable RGB backlighting with 16.8 million color options
              </li>
              <li>
                <CheckIcon />
                Dedicated media controls for easy volume and playback adjustment
              </li>
              <li>
                <CheckIcon />
                Durable and spill-resistant design
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Pricing</h2>
          <div className="rounded-lg bg-primary/5 p-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">
                &#36;
                {Math.floor(
                  productDetail.price * (100 - productDetail.saleRatio),
                ) / 100}
              </span>
              <span className="text-lg text-foreground/60 line-through">
                &#36;{productDetail.price}
              </span>
            </div>
            <p className="mt-2 text-foreground/60">
              Save {productDetail.saleRatio}&#37; on {productDetail.name} for a
              limited time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
