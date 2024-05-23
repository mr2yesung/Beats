import PageSection from "@/components/PageSection";

type AboutSectionProps = {
  className?: string;
  children?: React.ReactNode;
};

function AboutSection({ className = "", children }: AboutSectionProps) {
  return (
    <PageSection className={className}>
      <div className="container px-4 md:px-6">{children}</div>
    </PageSection>
  );
}

export default AboutSection;
