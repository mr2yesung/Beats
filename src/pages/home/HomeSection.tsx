type HomeSectionProps = {
  className?: string;
  children: React.ReactNode;
};

function HomeSection({ className = "", children }: HomeSectionProps) {
  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}

export default HomeSection;
