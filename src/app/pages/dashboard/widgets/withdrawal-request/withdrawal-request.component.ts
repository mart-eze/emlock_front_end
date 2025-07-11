import { Component } from "@angular/core";

import { CardComponent } from "../../../../components/card/card.component";
import { TableComponent } from "../../../../components/table/table.component";
import { TableConfigs } from "../../../../interface/common";
import { cardToggleOptions1 } from "../../../../data/common";
import { leaveRequests } from "../../../../data/dashboard/dashboard";
import { LeaveRequest } from "../../../../data/dashboard/dashboard.type";

@Component({
  selector: "app-withdrawal-request",
  imports: [CardComponent, TableComponent],
  templateUrl: "./withdrawal-request.component.html",
  styleUrl: "./withdrawal-request.component.scss",
})
export class WithdrawalRequestComponent {
  public leaveRequests = leaveRequests;
  public cardToggleOption = cardToggleOptions1;

  public tableConfig: TableConfigs = {
    columns: [
      { title: "Name", field_value: "name", sort: true },
      { title: "Bank Details", field_value: "details", sort: true },
      { title: "Amount", field_value: "amount", sort: true },
      { title: "Action", field_value: "action", sort: true },
    ],

    data: [] as LeaveRequest[],
  };

  ngOnInit() {
    this.tableConfig.data = leaveRequests.map((details: LeaveRequest) => {
      const formattedDetails = { ...details };
      formattedDetails.name = `  <div class="d-flex">
                                  <img class="img-fluid img-40 rounded-circle me-2" src="${details.image}" alt="user">
                                <div class="img-content-box">
                                  <a class="f-w-500" href="javascript:void(0)">${details.name}</a>
                                  <p class="mb-0 f-light">${details.leave_period}</p>
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
