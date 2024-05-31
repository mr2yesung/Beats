type CheckoutPriceProps = {
  title: string;
  price: number;
  titleClassName?: string;
  priceClassName?: string;
};

function CheckoutPrice({
  title,
  price,
  titleClassName = "",
  priceClassName = "",
}: CheckoutPriceProps) {
  return (
    <div className="flex items-center justify-between">
      <p className={titleClassName}>{title}</p>
      <p className={priceClassName || "font-bold"}>&#36;{price}</p>
    </div>
  );
}

export default CheckoutPrice;
