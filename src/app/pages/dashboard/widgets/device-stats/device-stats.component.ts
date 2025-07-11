import { Component } from "@angular/core";
import { NgApexchartsModule } from "ng-apexcharts";
import { CardComponent } from "../../../../components/card/card.component";
import { applicationOverview } from "../../../../data/dashboard/dashboard";
import { cardToggleOptions1 } from "../../../../data/common";

@Component({
  selector: "app-device-stats",
  imports: [NgApexchartsModule, CardComponent],
  templateUrl: "./device-stats.component.html",
  styleUrl: "./device-stats.component.scss",
})
export class DeviceStatsComponent {
  public applicationOverview = applicationOverview;
  public cardToggleOption = cardToggleOptions1;
}
