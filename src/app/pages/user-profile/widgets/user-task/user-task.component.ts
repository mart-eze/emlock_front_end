import { Component } from "@angular/core";
import { SlicePipe } from "@angular/common";

import { devices } from "../../../../data/device";
import { ProjectDetailsComponent } from "../../../../components/device-details/device-details.component";
import { CardComponent } from "../../../../components/card/card.component";
@Component({
  selector: "app-user-task",
  imports: [SlicePipe, CardComponent, ProjectDetailsComponent],
  templateUrl: "./user-task.component.html",
  styleUrl: "./user-task.component.scss",
})
export class UserTaskComponent {
  public devices = devices;
}
