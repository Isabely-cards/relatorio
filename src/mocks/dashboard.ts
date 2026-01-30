export const dashboardMock = {
  stats: {
    faturamento: 53200,
    vendas: 128,
    produtos: 24,
    vendedores: 6,
  },

  faturamentoMensal: [
    { mes: "Jan", valor: 4200 },
    { mes: "Fev", valor: 5100 },
    { mes: "Mar", valor: 6100 },
    { mes: "Abr", valor: 7200 },
    { mes: "Mai", valor: 8400 },
    { mes: "Jun", valor: 10200 },
  ],

  vendasPorCategoria: [
    { categoria: "Eletrônicos", total: 42 },
    { categoria: "Roupas", total: 31 },
    { categoria: "Acessórios", total: 18 },
    { categoria: "Outros", total: 37 },
  ],

  topProdutos: [
    { nome: "Notebook Dell", vendas: 32 },
    { nome: "iPhone 14", vendas: 28 },
    { nome: "Headset Gamer", vendas: 21 },
  ],

  vendasPorVendedor: [
    { nome: "Ana", total: 38 },
    { nome: "Carlos", total: 29 },
    { nome: "João", total: 34 },
    { nome: "Marina", total: 27 },
  ],
};
