import Item from "@/components/Item";
import HomeSection from "./HomeSection";

function FeaturedProducts() {
  return (
    <HomeSection>
      <div className="container space-y-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold capitalize tracking-tighter sm:text-4xl md:text-5xl">
            Featured Products
          </h2>
          <p className="max-w-[700px] text-foreground/60 md:text-xl">
            Discover out top-selling items that are loved by our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <Item id={1} imageSrc="" name="Beats B1 Red" price={119.99} />
          <Item id={1} imageSrc="" name="Beats B1 Red" price={119.99} />
          <Item id={1} imageSrc="" name="Beats B1 Red" price={119.99} />
          <Item id={1} imageSrc="" name="Beats B1 Red" price={119.99} />
        </div>
      </div>
    </HomeSection>
  );
}

export default FeaturedProducts;
