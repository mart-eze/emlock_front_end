import { Component, Input } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { Users } from '../../../../interface/user';


@Component({
  selector: 'app-user-personal-details',
  imports: [NgbTooltipModule],
  templateUrl: './user-personal-details.component.html',
  styleUrl: './user-personal-details.component.scss'
})

export class UserPersonalDetailsComponent {

  @Input() currentUser: Users;
  public user: Users;

  ngOnChanges() {
    this.user = { ...this.currentUser }
  }


  removeProfile() {
    this.user.user_profile = 'assets/images/forms/user2.png';
  }

}
