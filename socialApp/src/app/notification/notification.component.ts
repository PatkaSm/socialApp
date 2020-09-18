import { DOCUMENT } from '@angular/common';
import { EventEmitter, Input, Output } from '@angular/core';
import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { INotification } from '../interface/notification.interface';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent  {
  @Input() notification: INotification;
  @Output() delete: EventEmitter<INotification>;

  constructor(private notificationService: NotificationService) {
    this.delete = new EventEmitter();
  }

  slide(notificationContainer, notificationOptionContainer) {
    notificationContainer.classList.toggle('notification-slide-push');
    notificationOptionContainer.classList.toggle('notification-options-active');
  }

  likeToggle(event) {
    event.stopPropagation();
    this.notificationService.likeNotificationToggle(this.notification);
  }

  handleDelete($event: MouseEvent, notification: INotification) {
    $event.stopPropagation();
    this.delete.emit(notification);
  }
}
