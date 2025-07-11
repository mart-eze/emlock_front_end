import { Routes } from "@angular/router";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";

export const dashboard: Routes = [
  {
    path: "",
    component: DashboardComponent,
    data: {
      pageTitle: "Default Dashboard",
      title: "Default",
      breadcrumb: "Default",
    },
  },
];
