import { Button } from "@/components/ui/button";
import PageSection from "../../components/PageSection";
import { Link } from "react-router-dom";

function HomeExploreCatalog() {
  return (
    <PageSection className="bg-primary/10">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold capitalize tracking-tighter md:text-4xl/tight">
            Explore Our Full Product Catalog
          </h2>
          <p className="mx-auto max-w-[600px] text-foreground/60 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Browse through our extensive selection of high-quality products that
            cater to all your needs.
          </p>
        </div>

        <Button asChild>
          <Link to="/product" className="capitalize">
            Shop All Products
          </Link>
        </Button>
      </div>
    </PageSection>
  );
}

export default HomeExploreCatalog;
