import FeaturedProducts from "./FeaturedProducts";
import Hero from "./Hero";
import HomeExploreCatalog from "./HomeExploreCatalog";

function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <FeaturedProducts />

      <HomeExploreCatalog />
    </div>
  );
}

export default Home;
