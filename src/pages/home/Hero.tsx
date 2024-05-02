import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import HomeSection from "./HomeSection";

function Hero() {
  return (
    <HomeSection>
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter capitalize sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Elevate Your Gaming Setup
          </h1>
          <p className="max-w-[600px] text-foreground/60 md:text-xl">
            Discover top-tier keyboards tailored to your gaming style. Find the
            perfect gear to match your skills and dominate the competition.
          </p>

          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild>
              <Link to="/product" className="capitalize">
                Shop Now
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/about" className="capitalize">
                Learn More
              </Link>
            </Button>
          </div>
        </div>

        <img
          src="/images/hero.png"
          alt="homepage image"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-right-bottom sm:w-full"
          width={600}
          height={600}
        />
      </div>
    </HomeSection>
  );
}

export default Hero;
