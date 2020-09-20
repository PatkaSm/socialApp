import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { INotification } from '../interface/notification.interface';
import { NotificationService } from '../notification/notification.service';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  notifications$ = this.notificationService._allNotifications;
  menu$ = this.navService.showMenu;

  constructor(private notificationService: NotificationService,
              private navService: NavService) {
  }



  delete(notification: INotification) {
    this.notificationService.deleteNotification(notification.id);
  }

  toggleNav() {
    this.navService.navToggle();
  }
}
