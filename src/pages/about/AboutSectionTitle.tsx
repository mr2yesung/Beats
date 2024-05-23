type AboutSectionTitleProps = {
  main?: boolean;
  title: string;
  content: string;
};

function AboutSectionTitle({
  main = false,
  title,
  content,
}: AboutSectionTitleProps) {
  const titleClassName = "text-3xl font-bold tracking-tighter sm:text-5xl";

  return (
    <div className="space-y-4">
      {main ? (
        <h1 className={titleClassName}>{title}</h1>
      ) : (
        <h2 className={titleClassName}>{title}</h2>
      )}

      <p className="mx-auto max-w-[600px] text-foreground/60 md:text-xl lg:text-base xl:text-xl">
        {content}
      </p>
    </div>
  );
}

export default AboutSectionTitle;
