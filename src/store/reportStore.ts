// store/reportStore.ts
import { create } from "zustand";

export type ReportFilters = {
  startDate: string;
  endDate: string;
  show: {
    faturamentoMensal: boolean;
    vendasPorCategoria: boolean;
    topProdutos: boolean;
    vendasPorVendedor: boolean;
  };
};

export const useReportStore = create<{
  filters: ReportFilters;
  setFilters: (filters: ReportFilters) => void;
}>((set) => ({
  filters: {
    startDate: "",
    endDate: "",
    show: {
      faturamentoMensal: true,
      vendasPorCategoria: true,
      topProdutos: true,
      vendasPorVendedor: true,
    },
  },
  setFilters: (filters) => set({ filters }),
}));