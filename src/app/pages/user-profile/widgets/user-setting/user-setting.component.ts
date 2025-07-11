import { Component } from "@angular/core";
import { Select2Module } from "ng-select2-component";
import { CardComponent } from "../../../../components/card/card.component";

@Component({
  selector: "app-user-setting",
  imports: [Select2Module, CardComponent],
  templateUrl: "./user-setting.component.html",
  styleUrl: "./user-setting.component.scss",
})
export class UserSettingComponent {}
