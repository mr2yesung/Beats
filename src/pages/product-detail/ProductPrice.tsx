type ProductPriceProps = {
  name: string;
  price: number;
  saleRatio: number;
};

function ProductPrice({ name, price, saleRatio }: ProductPriceProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Pricing</h2>
      <div className="rounded-lg bg-primary/5 p-6">
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">
            &#36;
            {Math.floor(price * (100 - saleRatio)) / 100}
          </span>
          <span className="text-lg text-foreground/60 line-through">
            &#36;{price}
          </span>
        </div>
        <p className="mt-2 text-foreground/60">
          Save {saleRatio}&#37; on {name} for a limited time.
        </p>
      </div>
    </div>
  );
}

export default ProductPrice;
