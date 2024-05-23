type PageSectionProps = {
  className?: string;
  children: React.ReactNode;
};

function PageSection({ className = "", children }: PageSectionProps) {
  return (
    <section className={`w-full py-12 md:py-24 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}

export default PageSection;
