import { Component } from '@angular/core';
import { IEmail } from '../interface/email.interface';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent{
  emails$ = this.navService.emailList;
  navOptionsVisibility: { [key: string]: boolean };
  menu$ = this.navService.showMenu;

  constructor(private navService: NavService) {
    this.navOptionsVisibility = {
      emails: false,
      friends: false,
      invites: false,
      bookmarks: false,
      accountSettings: false,
    };


  }

  toggleSubMenu(key: string): void {
    Object.keys(this.navOptionsVisibility).forEach((element) => {
      if (element !== key) {
        this.navOptionsVisibility[element] = false;
      }
    });
    this.navOptionsVisibility[key] = !this.navOptionsVisibility[key];
  }
}
