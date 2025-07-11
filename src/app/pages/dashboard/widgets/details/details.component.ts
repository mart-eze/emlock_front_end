import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { Kpis } from "../../../../data/dashboard/dashboard.type";
import { SvgIconComponent } from "../../../../components/svg-icon/svg-icon.component";
import { CardComponent } from "../../../../components/card/card.component";

@Component({
  selector: "app-details",
  imports: [CommonModule, CardComponent, SvgIconComponent],
  templateUrl: "./details.component.html",
  styleUrl: "./details.component.scss",
})
export class DetailsComponent {
  @Input() details: Kpis;
}
