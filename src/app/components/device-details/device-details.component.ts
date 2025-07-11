import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { SvgIconComponent } from "../svg-icon/svg-icon.component";
import { Devices } from "../../interface/device";

@Component({
  selector: "app-device-details",
  imports: [CommonModule, NgbTooltipModule, SvgIconComponent],
  templateUrl: "./device-details.component.html",
  styleUrl: "./device-details.component.scss",
})
export class ProjectDetailsComponent {
  @Input() device: Devices;

  constructor() {}
}
