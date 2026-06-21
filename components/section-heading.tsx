type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  children
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-5 text-xs uppercase tracking-[0.24em] text-clay">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-serif text-4xl leading-[1.05] text-balance text-ink sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-7 space-y-5 text-pretty text-lg leading-8 text-muted">
          {children}
        </div>
      ) : null}
    </div>
  );
}
