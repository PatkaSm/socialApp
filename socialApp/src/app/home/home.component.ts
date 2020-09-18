import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { INotification } from '../interface/notification.interface';
import { NotificationService } from '../notification/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  notifications$ = this.notificationService._allNotifications

  constructor(@Inject(DOCUMENT) private document: Document, private notificationService: NotificationService) {
    
  }

  showMenu() {
    const nav = this.document.querySelector('.nav');
    const main = this.document.querySelector('.container');
    nav.classList.toggle('nav-active');
    main.classList.toggle('container-nav-push');
  }

  delete(notification: INotification) {
    this.notificationService.deleteNotification(notification.id);
  }
}
