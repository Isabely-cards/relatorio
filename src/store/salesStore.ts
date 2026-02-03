import { create } from "zustand";

export type SaleStatus = "Pago" | "Processando" | "Cancelado";

export type Sale = {
  id: string;
  date: string; 
  product: string;
  category: string;
  value: number;
  seller: string;
  status: SaleStatus;
};

type SalesStats = {
  faturamento: number;
  vendas: number;
  produtos: number;
  vendedores: number;
};

type SalesStore = {
  sales: Sale[];

  addSale: (sale: Omit<Sale, "id">) => void;
  updateSale: (id: string, data: Omit<Sale, "id">) => void;

  stats: SalesStats;
  faturamentoMensal: { month: string; total: number }[];
  vendasPorCategoria: { category: string; total: number }[];
  vendasPorVendedor: { seller: string; total: number }[];
  vendasPorStatus: { status: SaleStatus; total: number }[];
};

export const useSalesStore = create<SalesStore>((set, get) => ({
  sales: [],
  addSale: (sale) =>
    set((state) => ({
      sales: [...state.sales, { ...sale, id: crypto.randomUUID() }],
    })),

  updateSale: (id, data) =>
    set((state) => ({
      sales: state.sales.map((sale) =>
        sale.id === id ? { ...sale, ...data } : sale
      ),
    })),

  get stats() {
    const sales = get().sales;

    const paidSales = sales.filter(
      (sale) => sale.status === "Pago"
    );

    return {
      faturamento: paidSales.reduce(
        (sum, sale) => sum + sale.value,
        0
      ),
      vendas: sales.length,
      produtos: new Set(sales.map((s) => s.product)).size,
      vendedores: new Set(sales.map((s) => s.seller)).size,
    };
  },

  get faturamentoMensal() {
    const paidSales = get().sales.filter(
      (sale) => sale.status === "Pago"
    );

    return paidSales.reduce((acc, sale) => {
      const month = new Date(sale.date).toLocaleDateString("pt-BR", {
        month: "short",
        year: "numeric",
      });

      const found = acc.find((m) => m.month === month);

      if (found) {
        found.total += sale.value;
      } else {
        acc.push({ month, total: sale.value });
      }

      return acc;
    }, [] as { month: string; total: number }[]);
  },

  get vendasPorCategoria() {
    return get().sales.reduce((acc, sale) => {
      const found = acc.find(
        (c) => c.category === sale.category
      );

      if (found) {
        found.total += sale.value;
      } else {
        acc.push({
          category: sale.category,
          total: sale.value,
        });
      }

      return acc;
    }, [] as { category: string; total: number }[]);
  },

  get vendasPorVendedor() {
    return get().sales.reduce((acc, sale) => {
      const found = acc.find(
        (v) => v.seller === sale.seller
      );

      if (found) {
        found.total += sale.value;
      } else {
        acc.push({
          seller: sale.seller,
          total: sale.value,
        });
      }

      return acc;
    }, [] as { seller: string; total: number }[]);
  },

  get vendasPorStatus() {
    return get().sales.reduce((acc, sale) => {
      const found = acc.find(
        (s) => s.status === sale.status
      );

      if (found) {
        found.total += sale.value;
      } else {
        acc.push({
          status: sale.status,
          total: sale.value,
        });
      }

      return acc;
    }, [] as { status: SaleStatus; total: number }[]);
  },
}));
