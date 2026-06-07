type SectionHeaderProps = {
  number: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  number,
  title,
  subtitle,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <p className="section-number mb-2 sm:mb-3">{number}</p>
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-sm text-slate sm:mt-3 sm:text-base md:text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={`ornament-line mt-4 sm:mt-6 ${align === "center" ? "mx-auto" : ""} max-w-xs`}
      />
    </div>
  );
}
