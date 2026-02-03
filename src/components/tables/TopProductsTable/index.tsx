interface Props {
  data: { product: string; total: number }[];
}

export function TopProductsTable({ data }: Props) {
  return (
    <table className="w-full text-sm">
      <thead className="text-left opacity-70 text-[var(--color-secondary)]">
        <tr>
          <th>Produto</th>
          <th>Vendas</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.product} className="border-t border-white/10 text-[var(--text-primary)]">
            <td className="py-2">{item.product}</td>
            <td>{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
