import CheckIcon from "@/components/icons/CheckIcon";

const features = [
  "Mechanical switches for precise and responsive typing",
  "Customizable RGB backlighting with 16.8 million color options",
  "Dedicated media controls for easy volume and playback adjustment",
  "Durable and spill-resistant design",
];

function ProductFeatures() {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-bold">Features</h3>
      <ul className="space-y-1 text-foreground/60">
        {features.map((feature) => (
          <li key={feature}>
            <CheckIcon />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductFeatures;
