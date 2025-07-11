import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { CardComponent } from "../../components/card/card.component";
import { UserPersonalDetailsComponent } from "./widgets/user-personal-details/user-personal-details.component";
import { userDetailsTab, users } from "../../data/user";
import { Users } from "../../interface/user";
import { UserActivityComponent } from "./widgets/user-activity/user-activity.component";
import { UserTaskComponent } from "./widgets/user-task/user-task.component";
import { UserSettingComponent } from "./widgets/user-setting/user-setting.component";

@Component({
  selector: "app-user-profile",
  imports: [
    NgbNavModule,
    UserPersonalDetailsComponent,
    CardComponent,
    UserActivityComponent,
    UserTaskComponent,
    UserSettingComponent,
  ],
  templateUrl: "./user-profile.component.html",
  styleUrl: "./user-profile.component.scss",
})
export class UserProfileComponent {
  public currentUserId: number;
  public currentUser: Users;
  public activeTab: string = "activity";

  public users = users;
  public userDetailsTab = userDetailsTab;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(userDetailsTab);
    this.route.params.subscribe((params) => {
      // const id = +params['id'];
      const id = 1;
      if (!isNaN(id)) {
        this.currentUserId = id;
        const user = this.users.find((user) => user.id === this.currentUserId);
        if (user) {
          this.currentUser = user;
        }
      }
    });
  }
}
