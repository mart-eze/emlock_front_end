import { Component, Input, ViewEncapsulation } from "@angular/core";
import { RouterModule } from "@angular/router";

import { FeatherIconComponent } from "../../../feather-icon/feather-icon.component";
import { LayoutService } from "../../../../services/layout.service";

@Component({
  selector: "app-header-logo",
  imports: [RouterModule, FeatherIconComponent],
  templateUrl: "./header-logo.component.html",
  styleUrls: ["./header-logo.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderLogoComponent {
  @Input() icon: string;
  @Input() type: string;

  constructor(public layoutService: LayoutService) {}

  toggleSidebar() {
    this.layoutService.closeSidebar = !this.layoutService.closeSidebar;
  }
}
