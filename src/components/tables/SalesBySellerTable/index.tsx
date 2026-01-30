interface Props {
  data: { nome: string; total: number }[];
}

export function SalesBySellerTable({ data }: Props) {
  return (
    <table className="w-full text-sm">
      <thead className="text-left opacity-70 text-white">
        <tr>
          <th>Vendedor</th>
          <th>Total de vendas</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.nome} className="border-t border-white/10 text-white">
            <td className="py-2">{item.nome}</td>
            <td>{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}