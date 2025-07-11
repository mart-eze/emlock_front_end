import { Component } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { FeatherIconComponent } from "../../../feather-icon/feather-icon.component";


@Component({
  selector: "app-profile",
  imports: [RouterModule, FeatherIconComponent],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.scss",
})
export class ProfileComponent {
  public profile = [
    {
      id: 1,
      title: "Account",
      icon: "user",
      path: "user/user-profile/1",
    }
  ];

  constructor(private router: Router) {}

  logOut() {
    localStorage.clear();
    this.router.navigate(["/auth/login"]);
  }
}
