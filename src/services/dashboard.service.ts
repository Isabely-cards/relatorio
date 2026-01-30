import { dashboardMock } from "../mocks/dashboard";

export function getDashboardData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardMock);
    }, 800); // simula delay da API
  });
}