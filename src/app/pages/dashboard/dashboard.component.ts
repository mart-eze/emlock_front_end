import { Component } from "@angular/core";
import { kpis } from "../../data/dashboard/dashboard";
import { ProjectSummaryCardComponent } from "./widgets/project-summary-card/project-summary-card.component";
import { DeviceStatsComponent } from "./widgets/device-stats/device-stats.component";
import { DetailsComponent } from "./widgets/details/details.component";
import { DeviceOverviewComponent } from "./widgets/device-overview/device-overview.component";
import { ShopkeeperOverviewComponent } from "./widgets/shopkeeper-overview/shopkeeper-overview.component";
import { SystemHealthComponent } from "./widgets/system-health/system-health.component";
import { PendingRequestComponent } from "./widgets/pending-request/pending-request.component";
import { ProjectConfigComponent } from "./widgets/project-config/project-config.component";
import { CenteredModalComponent } from "../../components/centered-modal/centered-modal.component";

@Component({
  selector: "app-hr",
  imports: [
    DetailsComponent,
    ProjectSummaryCardComponent,
    DeviceStatsComponent,
    DeviceOverviewComponent,
    ShopkeeperOverviewComponent,
    SystemHealthComponent,
    PendingRequestComponent,
    ProjectConfigComponent,
  ],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {
  public summaryCardDetails = kpis;
}
