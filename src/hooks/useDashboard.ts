import { useMemo } from "react";
import { useSalesStore } from "../store/salesStore";
import { useReportStore } from "../store/reportStore";

export function useDashboard() {
  const sales = useSalesStore((state) => state.sales);
  const filters = useReportStore((state) => state.filters);

  const data = useMemo(() => {
    // 1️⃣ Filtrar vendas por data (relatório)
    const filteredSales = sales.filter((sale) => {
      const saleDate = new Date(sale.date);

      if (filters.startDate && saleDate < new Date(filters.startDate)) {
        return false;
      }

      if (filters.endDate && saleDate > new Date(filters.endDate)) {
        return false;
      }

      return true;
    });

    // 2️⃣ KPIs
    const faturamento = filteredSales.reduce(
      (acc, sale) => acc + sale.value,
      0
    );

    const vendas = filteredSales.length;
    const produtos = new Set(filteredSales.map((s) => s.product)).size;
    const vendedores = new Set(filteredSales.map((s) => s.seller)).size;

    const faturamentoMensal = filters.show.faturamentoMensal
      ? Object.entries(
          filteredSales.reduce<Record<string, number>>((acc, sale) => {
            const month = new Date(sale.date).toLocaleString("pt-BR", {
              month: "short",
              year: "numeric",
            });

            acc[month] = (acc[month] || 0) + sale.value;
            return acc;
          }, {})
        ).map(([month, total]) => ({ month, total }))
      : [];

    const vendasPorCategoria = filters.show.vendasPorCategoria
      ? Object.entries(
          filteredSales.reduce<Record<string, number>>((acc, sale) => {
            acc[sale.category] = (acc[sale.category] || 0) + 1;
            return acc;
          }, {})
        ).map(([category, total]) => ({ category, total }))
      : [];

    const vendasPorVendedor = filters.show.vendasPorVendedor
      ? Object.entries(
          filteredSales.reduce<Record<string, number>>((acc, sale) => {
            acc[sale.seller] = (acc[sale.seller] || 0) + sale.value;
            return acc;
          }, {})
        ).map(([seller, total]) => ({ seller, total }))
      : [];

    const topProdutos = filters.show.topProdutos
      ? Object.entries(
          filteredSales.reduce<Record<string, number>>((acc, sale) => {
            acc[sale.product] = (acc[sale.product] || 0) + sale.value;
            return acc;
          }, {})
        )
          .map(([product, total]) => ({ product, total }))
          .sort((a, b) => b.total - a.total)
          .slice(0, 5)
      : [];

    return {
      stats: {
        faturamento,
        vendas,
        produtos,
        vendedores,
      },
      faturamentoMensal,
      vendasPorCategoria,
      vendasPorVendedor,
      topProdutos,
    };
  }, [sales, filters]);

  return {
    data,
    loading: false,
  };
}
