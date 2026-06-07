type WriteupTableProps = {
  caption?: string;
  headers: string[];
  rows: (string | number)[][];
  footnote?: string;
};

export function WriteupTable({
  caption,
  headers,
  rows,
  footnote,
}: WriteupTableProps) {
  return (
    <figure className="my-6 overflow-x-auto">
      {caption && (
        <figcaption className="mb-3 font-mono text-[10px] uppercase tracking-wider text-slate">
          {caption}
        </figcaption>
      )}
      <table className="w-full min-w-[280px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-navy/20 bg-ivory">
            {headers.map((header) => (
              <th
                key={header}
                className="px-3 py-2 text-left font-mono text-[10px] uppercase tracking-wider text-navy"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-b border-line">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-3 py-2.5 text-navy/90">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {footnote && (
        <p className="mt-2 text-xs text-slate">{footnote}</p>
      )}
    </figure>
  );
}
