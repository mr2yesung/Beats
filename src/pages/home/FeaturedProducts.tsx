import Product from "@/components/Product";
import PageSection from "../../components/PageSection";
import { useFeaturedProducts } from "@/hooks/useFeaturedProducts";
import ProductSkeleton from "@/components/ProductSkeleton";

function FeaturedProducts() {
  const { featuredProducts } = useFeaturedProducts();

  return (
    <PageSection>
      <div className="container space-y-8 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold capitalize tracking-tighter sm:text-4xl md:text-5xl">
            Featured Products
          </h2>
          <p className="max-w-[700px] text-foreground/60 md:text-xl">
            Discover out top-selling items that are loved by our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts
            ? featuredProducts.map((product) => (
                <Product key={product.id} {...product} />
              ))
            : [...Array(4)].map((_, i) => <ProductSkeleton key={i} />)}
        </div>
      </div>
    </PageSection>
  );
}

export default FeaturedProducts;
