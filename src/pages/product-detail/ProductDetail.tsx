import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { useProductById } from "@/hooks/useProductById";
import Loading from "@/components/Loading";
import ProductPrice from "./ProductPrice";
import ProductFeatures from "./ProductFeatures";
import ButtonAddCart from "@/components/ButtonAddCart";

function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { productDetail, isLoading } = useProductById(
    productId ? parseInt(productId) : 0,
  );

  useEffect(
    function () {
      if (!productDetail && !isLoading)
        navigate("/not-found", { replace: true });
    },
    [productDetail, isLoading, navigate],
  );

  if (isLoading) return <Loading />;

  if (!productDetail) return null;

  const specifications = [
    { name: "Switches", value: productDetail.switchName },
    { name: "Keycaps", value: productDetail.keycap },
    { name: "Polling Rate", value: `${productDetail.pollingRate}Hz` },
    { name: "Layout", value: `${productDetail.layout}%` },
  ];

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
            <ButtonAddCart id={productDetail.id} />
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
              {specifications.map((specification) => (
                <li key={specification.name}>
                  <span className="font-medium text-foreground">
                    {specification.name}:{" "}
                  </span>
                  {specification.value}
                </li>
              ))}
            </ul>
          </div>

          <ProductFeatures />
        </div>

        <ProductPrice
          name={productDetail.name}
          price={productDetail.price}
          saleRatio={productDetail.saleRatio}
        />
      </div>
    </div>
  );
}

export default ProductDetail;
