import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { IEmail } from '../interface/email.interface';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent{
  emails: IEmail[];
  navOptionsVisibility: { [key: string]: boolean };

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.navOptionsVisibility = {
      emails: false,
      friends: false,
      invites: false,
      bookmarks: false,
      accountSettings: false,
    };

    this.emails = [
      {
        id: 1,
        author: 'Mike',
        content: '',
        title: 'Hello you!',
        timestamp: new Date(),
      },
      {
        id: 2,
        author: 'Dash',
        content: '',
        title: 'Work things',
        timestamp: new Date(),
      },
      {
        id: 3,
        author: 'Ghulam',
        content: '',
        title: 'Upcoming web agency',
        timestamp: new Date(),
      },
      {
        id: 4,
        author: 'Bill',
        content: '',
        title: 'You should see it',
        timestamp: new Date(),
      },
      {
        id: 5,
        author: 'Lena',
        content: '',
        title: "You don't answer the phone",
        timestamp: new Date(),
      },
    ];
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
