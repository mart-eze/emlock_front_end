import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CardComponent } from "../../../../components/card/card.component";
import { SystemMetric } from "../../../../data/dashboard/dashboard.type";
import { systemMetrics } from "../../../../data/dashboard/dashboard";

@Component({
  selector: "app-system-health",
  imports: [CommonModule, CardComponent],
  templateUrl: "./system-health.component.html",
  styleUrl: "./system-health.component.scss",
})
export class SystemHealthComponent {
  public systemMetrics: SystemMetric[] = systemMetrics;
}
