import { Component, inject } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";

import { CardComponent } from "../../../../components/card/card.component";
import { TableComponent } from "../../../../components/table/table.component";
import { cardToggleOptions3 } from "../../../../data/common";
import { TableClickedAction, TableConfigs } from "../../../../interface/common";
import { DeviceList } from "../../../../data/dashboard/dashboard.type";
import { DeviceService } from "../../../../services/device/device.service";
import { environment } from "../../../../environments/environment";
import { HttpErrorResponse } from "@angular/common/http";
import { ApiResponse } from "../../../../types/http.types";
import { ToastrService } from "ngx-toastr";
import { HelperService } from "../../../../services/helper/helper.service";

@Component({
  selector: "app-customer-overview",
  imports: [CardComponent, TableComponent],
  templateUrl: "./device-overview.component.html",
  styleUrl: "./device-overview.component.scss",
})
export class DeviceOverviewComponent {
  public deviceList : DeviceList[]= [];
  public cardToggleOption = cardToggleOptions3;

  public tableConfig: TableConfigs = {
    columns: [
      { title: "Customer Name", field_value: "name", sort: true },
      { title: "IMEI", field_value: "imei", sort: true },
      { title: "Model", field_value: "model", sort: false },
      { title: "Price", field_value: "total_price_html", sort: true },
      { title: "Date", field_value: "date_of_sale_html", sort: false },
      { title: "Status", field_value: "status", sort: true },
    ],
    row_action: [{ label: "DeviceLockStatus", modal: false }],
    data: [] as DeviceList[],
  };
  _deviceService = inject(DeviceService);
  _toast = inject(ToastrService);
  _helperService = inject(HelperService);
  constructor(private router: Router, private sanitizer: DomSanitizer) {}

ngOnInit() {
  (window as any)["navigateToUser"] = () => {
    this.router.navigate(["/user/user-list"]);
  };

  this.loadDevices();
}

  handleAction(value: TableClickedAction) {
    if (value.action_to_perform === "delete" && value.data) {
      this.deviceList = this.deviceList.filter(
        (device: DeviceList) => device.id !== value.data.id
      );
      this.tableConfig = {
        ...this.tableConfig,
        data: this.formatDeviceDetails(this.deviceList),
      };
    }
  }

  private formatDeviceDetails(devices: DeviceList[]) {
    return devices.map((device: DeviceList) => {
      const formattedDevice = { ...device };
      formattedDevice.name = this.sanitizer
        .bypassSecurityTrustHtml(`<div class="common-flex align-items-center">
                                      <img class="img-fluid rounded-circle" src="${environment.beseUrl}/${device.image}" alt="user">
                                      <a class="f-w-500" href="javascript:void(0)" onclick="navigateToUser()">${device.name}</a>
                                </div>`);

      formattedDevice.model = this.sanitizer.bypassSecurityTrustHtml(`
      <div>
        <div>${device.model}</div>
        <div style="font-size: 0.75rem; color: #666;">${device.brand}</div>
      </div>
        `);

      const today = new Date();
      const dueDate = new Date(device.due_date);
      const timeDiff = dueDate.getTime() - today.getTime();
      const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

      const remainingText =
        daysRemaining >= 0 ? `+${daysRemaining} days` : `${daysRemaining} days`;
      const remainingColor = daysRemaining >= 0 ? "#28a745" : "#dc3545"; // green or red

      // Date of Sale + Days Remaining
      formattedDevice.date_of_sale_html = this.sanitizer
        .bypassSecurityTrustHtml(`
      <div>
        <div>${device.date_of_sale}</div>
        <div style="font-size: 0.75rem; color: ${remainingColor};">${remainingText} remaining</div>
      </div>
        `);

      const percentagePaid =
        device.total_price > 0
          ? Math.round((device.price_paid / device.total_price) * 100)
          : 0;

      let percentageColor = "#dc3545"; // red
      if (percentagePaid >= 75) {
        percentageColor = "#28a745"; // green
      } else if (percentagePaid >= 40) {
        percentageColor = "#ffc107"; // yellow
      }

      // Total Price + % Paid
      formattedDevice.total_price_html = this.sanitizer
        .bypassSecurityTrustHtml(`
      <div>
        <div>$${device.total_price}</div>
        <div style="font-size: 0.75rem; color: ${percentageColor};">Paid: ${percentagePaid}%</div>
      </div>
        `);

      return formattedDevice;
    });
  }

loadDevices() {
  this._deviceService.getPaginatedDevices(1, 100).subscribe({
    next: (response) => {
      this.deviceList = response.data.items ?? [];
      const formattedData = this.formatDeviceDetails(this.deviceList);
      this.tableConfig = {
        ...this.tableConfig,
        data: formattedData
      };
    },
    error: (error: HttpErrorResponse) => {
          const errorResponse: ApiResponse =
            this._helperService.formatError(error);
          this._toast.error(errorResponse.message, "", {
            positionClass: "toast-top-right",
            closeButton: true,
            timeOut: 2000,
          });
        },
      });
    }
}
