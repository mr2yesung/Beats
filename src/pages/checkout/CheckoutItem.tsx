type CheckoutItemProps = {
  name: string;
  actualPrice: number;
  image: string;
  quantity: number;
};

function CheckoutItem({
  name,
  actualPrice,
  image,
  quantity,
}: CheckoutItemProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          alt={name}
          className="aspect-square rounded-md object-cover"
          height={64}
          src={image}
          width={64}
        />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-foreground/60">Quantity: {quantity}</p>
        </div>
      </div>
      <p className="font-bold">&#36;{actualPrice * quantity}</p>
    </div>
  );
}

export default CheckoutItem;
