import { ReactNode } from "react";

type WriteupSectionProps = {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
};

export function WriteupSection({
  id,
  number,
  title,
  children,
}: WriteupSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line pt-10 sm:pt-12">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
        {number}
      </p>
      <h2 className="mt-2 font-serif text-2xl font-semibold text-navy sm:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate sm:text-base">
        {children}
      </div>
    </section>
  );
}
