import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AboutSection from "./AboutSection";
import AboutSectionTitle from "./AboutSectionTitle";

const sectionTitles = [
  {
    title: "About Beats",
    content:
      "We are a team of passionate gamers who wanted to create the ultimate gaming experience. Our mission is to provide the best gaming peripherals that enhance performance, precision, and comfort for gamers of all levels.",
  },
  {
    title: "Designed for Gamers, by Gamers",
    content:
      "Our gaming peripherals are crafted with the needs of serious gamers in mind, offering unparalleled performance, comfort, and style.",
  },
  {
    title: "Meet the Minds Behind the Masterpieces",
    content:
      "Our passionate team of gamers and engineers are dedicated to crafting the ultimate gaming peripherals.",
  },
];

const features = [
  {
    title: "High-Performance Switches",
    content:
      "Our keyboards feature durable, responsive mechanical switches for lightning-fast inputs.",
  },
  {
    title: "Ergonomic Design",
    content:
      "Contoured shapes and adjustable features ensure maximum comfort during extended gaming sessions.",
  },
  {
    title: "Customizable Lighting",
    content: "Personalize your setup with our RGB-enabled keyboards and mice.",
  },
];

function About() {
  return (
    <div className="flex flex-col">
      <div className="flex-1">
        <AboutSection>
          <div className="flex flex-col items-center gap-4 text-center lg:gap-10">
            <AboutSectionTitle
              main
              title={sectionTitles[0].title}
              content={sectionTitles[0].content}
            />
          </div>
        </AboutSection>

        <AboutSection className="bg-primary/5">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <AboutSectionTitle
              title={sectionTitles[1].title}
              content={sectionTitles[1].content}
            />
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-right sm:w-full"
              src="/images/hero.png"
            />

            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                {features.map((feature) => (
                  <li key={feature.title}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-foreground/60">{feature.content}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AboutSection>

        <AboutSection>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <AboutSectionTitle
              title={sectionTitles[2].title}
              content={sectionTitles[2].content}
            />
          </div>

          <div className="mx-auto flex max-w-5xl flex-col items-center justify-around gap-6 py-12 sm:flex-row lg:gap-12">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex flex-col items-center space-y-4">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Yeseong Kim"
                  />
                  <AvatarFallback>YK</AvatarFallback>
                </Avatar>
                <div className="space-y-1 text-center">
                  <h3 className="text-xl font-bold">Yeseong Kim</h3>
                  <p className="text-foreground/60">Co-Founder</p>
                </div>
              </div>
            ))}
          </div>
        </AboutSection>
      </div>
    </div>
  );
}

export default About;
