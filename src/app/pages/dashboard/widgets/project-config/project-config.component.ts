import { Component } from "@angular/core";
import {
  pendingRequests,
  projectConfigs,
} from "../../../../data/dashboard/dashboard";
import { TableConfigs } from "../../../../interface/common";
import {
  PendingRequest,
  ProjectConfig,
} from "../../../../data/dashboard/dashboard.type";
import { cardToggleOptions1 } from "../../../../data/common";
import { CardComponent } from "../../../../components/card/card.component";
import { TableComponent } from "../../../../components/table/table.component";

@Component({
  selector: "app-project-config",
  imports: [CardComponent, TableComponent],
  templateUrl: "./project-config.component.html",
  styleUrl: "./project-config.component.scss",
})
export class ProjectConfigComponent {
  public leaveRequests = projectConfigs;
  public cardToggleOption = [];

  public tableConfig: TableConfigs = {
    columns: [
      { title: "Name", field_value: "name", sort: true },
      { title: "Description", field_value: "description", sort: true },
      { title: "Action", field_value: "action", sort: true },
    ],

    data: [] as ProjectConfig[],
  };

  ngOnInit() {
    this.tableConfig.data = projectConfigs.map((details: ProjectConfig) => {
      const formattedDetails = { ...details };
      formattedDetails.name = `  <div class="d-flex">
                                <div class="img-content-box">
                                  <a class="f-w-500" href="javascript:void(0)">${details.name}</a>
                                  <p class="mb-0 f-light">${details.value}</p>
                                </div>
                              </div>`;

      formattedDetails.action = `
                              <div class="common-align gap-2 justify-content-start">
                                <div class="approval-box bg-primary" style="cursor: pointer;" title="Edit">
                                  <i class="fa-solid fa-pen text-white"></i>
                                </div>
                              </div>
                            `;

      return formattedDetails;
    });
  }
}
