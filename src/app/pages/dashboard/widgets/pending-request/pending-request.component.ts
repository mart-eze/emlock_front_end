import { Component } from "@angular/core";
import { pendingRequests } from "../../../../data/dashboard/dashboard";
import { cardToggleOptions1 } from "../../../../data/common";
import { TableConfigs } from "../../../../interface/common";
import { PendingRequest } from "../../../../data/dashboard/dashboard.type";
import { CardComponent } from "../../../../components/card/card.component";
import { TableComponent } from "../../../../components/table/table.component";

@Component({
  selector: "app-pending-request",
  imports: [CardComponent, TableComponent],
  templateUrl: "./pending-request.component.html",
  styleUrl: "./pending-request.component.scss",
})
export class PendingRequestComponent {
  public leaveRequests = pendingRequests;
  public cardToggleOption = cardToggleOptions1;

  public tableConfig: TableConfigs = {
    columns: [
      { title: "Name", field_value: "name", sort: true },
      { title: "Reason", field_value: "reason", sort: true },
      { title: "Action", field_value: "action", sort: true },
    ],

    data: [] as PendingRequest[],
  };

  ngOnInit() {
    this.tableConfig.data = pendingRequests.map((details: PendingRequest) => {
      const formattedDetails = { ...details };
      formattedDetails.name = `  <div class="d-flex">
                                  <img class="img-fluid img-40 rounded-circle me-2" src="${details.image}" alt="user">
                                <div class="img-content-box">
                                  <a class="f-w-500" href="javascript:void(0)">${details.name}</a>
                                  <p class="mb-0 f-light">${details.type}</p>
                                </div>
                              </div>`;

      formattedDetails.action = `<div class="common-align gap-2 justify-content-start">
                                  <div class="approval-box bg-success"><i class="fa-solid fa-check text-white"></i></div>
                                  <div class="approval-box border border-danger"><i class="fa-solid fa-ban txt-danger"></i></div>
                                </div>`;

      return formattedDetails;
    });
  }
}
