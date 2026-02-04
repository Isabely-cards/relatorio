import { formatCurrency } from "../../../utils/formatCurrency";

interface Props {
  data: {
    product: string;
    totalValue: number;
    totalItems: number;
  }[];
}

export function TopProductsTable({ data }: Props) {
  return (
    <table className="w-full text-sm">
      <thead className="text-left opacity-70 text-[var(--color-secondary)]">
        <tr>
          <th>Produto</th>
          <th>Valor</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr
            key={item.product}
            className="border-t  border-[var(--text-secondary)]/50 text-[var(--text-primary)]"
          >
            <td className="py-2">{item.product}</td>
            <td>{formatCurrency(item.totalValue)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}