import { driver } from "driver.js";

export const appTour = driver({
  showProgress: true,
  allowClose: false,
  nextBtnText: "Próximo",
  prevBtnText: "Voltar",
  doneBtnText: "Finalizar",
  steps: [
    {
      element: "#tour-dashboard",
      popover: {
        title: "Dashboard",
        description:
          "Aqui você visualiza os principais dados e indicadores do sistema de forma rápida e organizada.",
        side: "right",
        align: "center",
      },
    },
    {
      element: "#tour-create-sale",
      popover: {
        title: "Criar venda",
        description:
          "Utilize esta opção para registrar novas vendas e acompanhar seus resultados diretamente na dashboard.",
        side: "right",
      },
    },
    {
      element: "#tour-create-report",
      popover: {
        title: "Criar relatório",
        description:
          "Nesta área, você pode aplicar filtros e gerar relatórios para analisar os dados da dashboard.",
        side: "right",
      },
    },
    {
      element: "#tour-history",
      popover: {
        title: "Histórico",
        description:
          "Aqui você acompanha todas as vendas registradas e pode editá-las sempre que necessário.",
        side: "right",
      },
    },
    {
      element: "#tour-theme-toggle",
      popover: {
        title: "Tema",
        description:
          "Alterne entre o modo claro e escuro para adaptar o visual do sistema à sua preferência.",
        side: "top",
      },
    },
  ],
});