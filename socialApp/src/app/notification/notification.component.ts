import { DOCUMENT } from '@angular/common';
import { EventEmitter, Input, Output } from '@angular/core';
import { Inject } from '@angular/core';
import { Component } from '@angular/core';
import { INotification } from '../interface/notification.interface';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent  {
  @Input() notification: INotification;
  @Output() delete;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.delete = new EventEmitter();
  }

  slide(notificationContainer, notificationOptionContainer) {
    notificationContainer.classList.toggle('notification-slide-push');
    notificationOptionContainer.classList.toggle('notification-options-active');
  }

  like_toggle(event) {
    event.stopPropagation();
    if (this.notification.isLiked === true) {
      this.notification.isLiked = false;
    } else {
      this.notification.isLiked = true;
    }
  }

  handleDelete($event: MouseEvent, notification: INotification) {
    $event.stopPropagation();
    this.delete.emit(notification);
  }
}
