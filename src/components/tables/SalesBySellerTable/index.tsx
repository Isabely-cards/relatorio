import { formatCurrency } from "../../../utils/formatCurrency";

interface Props {
  data: {
    seller: string;
    totalValue: number;
    totalItems: number;
    status: {
      Pago: number;
      Processando: number;
      Cancelado: number;
    };
  }[];
}

export function SalesBySellerTable({ data }: Props) {
  return (
    <table className="w-full text-sm">
      <thead className="text-left opacity-70 text-[var(--color-secondary)]">
        <tr>
          <th>Vendedor</th>
          <th>Vendas</th>
          <th>Valor total</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr
            key={item.seller}
            className="border-t border-[var(--text-secondary)]/50 text-[var(--text-primary)]"
          >
            <td className="py-2">{item.seller}</td>
            <td>{item.totalItems}</td>
            <td>{formatCurrency(item.totalValue)}</td>

            <td>
              <select
                className="
      bg-transparent
      border border-white/20
      rounded-md
      px-2 py-1
      text-xs
      text-[var(--text-primary)]
      focus:outline-none
    "
                defaultValue=""
              >
                <option value="" disabled>
                  Status
                </option>

                <option value="Pago" className="text-green-400">
                  Pago: {item.status.Pago}
                </option>

                <option value="Processando" className="text-yellow-400">
                  Proc.: {item.status.Processando}
                </option>

                <option value="Cancelado" className="text-red-400">
                  Canc.: {item.status.Cancelado}
                </option>
              </select>
            </td>

          </tr>
        ))}
      </tbody>

    </table>
  );
}