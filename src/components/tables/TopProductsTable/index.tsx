interface Props {
  data: { nome: string; vendas: number }[];
}

export function TopProductsTable({ data }: Props) {
  return (
    <table className="w-full text-sm">
      <thead className="text-left opacity-70 text-white">
        <tr>
          <th>Produto</th>
          <th>Vendas</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.nome} className="border-t border-white/10 text-white">
            <td className="py-2">{item.nome}</td>
            <td>{item.vendas}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
