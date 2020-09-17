import { DOCUMENT } from '@angular/common';
import { EventEmitter, Input, Output } from '@angular/core';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { INotification } from '../interface/notification.interface';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  @Input() notification;
  @Output() delete;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {}

  slide(notificationContainer, notificationOptionContainer) {
    notificationContainer.classList.toggle('notification-slide-push');
    notificationOptionContainer.classList.toggle('notification-options-active');
  }

  like_toggle(event) {
    event.stopPropagation();
    if (this.notification.is_liked === true) {
      this.notification.is_liked = false;
    } else {
      this.notification.is_liked = true;
    }
  }

  handleDelete($event: MouseEvent, notification: INotification) {
    $event.stopPropagation();
    this.delete.emit(notification);
  }
}
