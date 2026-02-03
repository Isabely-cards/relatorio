interface Props {
  data: { seller: string; total: number }[];
}

export function SalesBySellerTable({ data }: Props) {
  return (
    <table className="w-full text-sm">
      <thead className="text-left opacity-70 text-[var(--color-secondary)]">
        <tr>
          <th>Vendedor</th>
          <th>Total de vendas</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.seller} className="border-t border-white/10 text-[var(--text-primary)]">
            <td className="py-2">{item.seller}</td>
            <td>{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}