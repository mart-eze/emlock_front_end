import { Component, inject } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { TableComponent } from "../../../../components/table/table.component";
import { CardComponent } from "../../../../components/card/card.component";
import { shopkeeperOverview } from "../../../../data/dashboard/dashboard";
import { cardToggleOptions3 } from "../../../../data/common";
import { TableConfigs } from "../../../../interface/common";
import { ShopkeeperOverview } from "../../../../data/dashboard/dashboard.type";
import { AppUsersService } from "../../../../services/app-user/app-users.service";
import { ToastrService } from "ngx-toastr";
import { HelperService } from "../../../../services/helper/helper.service";
import { HttpErrorResponse } from "@angular/common/http";
import { ApiResponse } from "../../../../types/http.types";

@Component({
  selector: "app-shopkeeper-overview",
  imports: [TableComponent, CardComponent],
  templateUrl: "./shopkeeper-overview.component.html",
  styleUrl: "./shopkeeper-overview.component.scss",
})
export class ShopkeeperOverviewComponent {
  public shopkeeperOverview = shopkeeperOverview;
  public cardToggleOption = cardToggleOptions3;
  _userService = inject(AppUsersService);
  _toast = inject(ToastrService);
  _helperService = inject(HelperService);

  public shopKeeperList : ShopkeeperOverview[]= [];
  public tableConfig: TableConfigs = {
    columns: [
      { title: "Name", field_value: "name", sort: true },
      { title: "Shop Name", field_value: "shopName", sort: true },
      { title: "Shop Location", field_value: "shop_location_html", sort: true },
      { title: "Wallet", field_value: "balance", sort: true },
      { title: "Status", field_value: "status_html", sort: true },
    ],
    data: [] as ShopkeeperOverview[],
  };

  constructor(private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    (window as any)["navigateToUser"] = () => {
      this.router.navigate(["/user/user-list"]);
    };
    this.loadShopKeepers();
  }

  loadShopKeepers() {
  this._userService.getPaginatedUsers(2, 1, 100).subscribe({
    next: (response) => {
      this.shopKeeperList = response.data.items ?? [];
      const formattedData = this.formatShopkeeperDetails(this.shopKeeperList);
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

private formatShopkeeperDetails(shopkeepers: ShopkeeperOverview[]) {
  return shopkeepers.map((details: ShopkeeperOverview) => {
    const formattedDetails = { ...details };
debugger
    const fullName = `${details.name}`;
    formattedDetails.name = this.sanitizer.bypassSecurityTrustHtml(`
      <a class="f-w-500" href="javascript:void(0)" onclick="navigateToUser()">${fullName}</a>`);

    formattedDetails.shop_location_html = this.sanitizer.bypassSecurityTrustHtml(`
      <div>
        <div>${details.shopLocationCity}</div>
        <div style="font-size: 0.75rem; color: #666;">${details.shopLocationState}</div>
      </div>`);

    let statusClass = "secondary";
    switch (details.status?.toLowerCase()) {
      case "pending":
        statusClass = "warning";
        break;
      case "verified":
        statusClass = "success";
        break;
      case "rejected":
        statusClass = "danger";
        break;
    }

    formattedDetails.status_html = this.sanitizer.bypassSecurityTrustHtml(`
      <span class="badge badge-light-${statusClass}">${details.status}</span>`);

    return formattedDetails;
  });
}
}
