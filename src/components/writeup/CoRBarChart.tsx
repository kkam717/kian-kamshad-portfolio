type BarGroup = {
  label: string;
  values: { name: string; value: number }[];
};

type CoRBarChartProps = {
  title: string;
  groups: BarGroup[];
  maxValue?: number;
};

export function CoRBarChart({ title, groups, maxValue = 0.5 }: CoRBarChartProps) {
  return (
    <figure className="my-6 border border-line bg-cream p-4 sm:p-6">
      <figcaption className="mb-5 font-mono text-[10px] uppercase tracking-wider text-slate">
        {title}
      </figcaption>
      <div className="space-y-6">
        {groups.map((group) => (
          <div key={group.label}>
            <p className="mb-3 font-mono text-xs text-gold">{group.label}</p>
            <div className="flex items-end gap-4 sm:gap-8">
              {group.values.map((bar) => (
                <div key={bar.name} className="flex flex-1 flex-col items-center gap-2">
                  <span className="font-mono text-xs text-navy">
                    {bar.value.toFixed(3)}
                  </span>
                  <div
                    className="w-full max-w-[64px] bg-gold/80 transition-all"
                    style={{
                      height: `${Math.max(12, (bar.value / maxValue) * 120)}px`,
                    }}
                  />
                  <span className="text-center font-mono text-[10px] uppercase tracking-wider text-slate">
                    {bar.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}
