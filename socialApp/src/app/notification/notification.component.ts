import { AfterViewInit, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { INotification } from '../interface/notification.interface';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements AfterViewInit, OnChanges {
  @Input() notification: INotification;
  @Output() delete: EventEmitter<INotification>;
  @Input() i: number;
  @ViewChild('notificationContainer') notificationContainerRef: ElementRef;

  constructor(private notificationService: NotificationService) {
    this.delete = new EventEmitter();
  }

  ngAfterViewInit() {
    if (this.i === 0) {
      this.notificationContainerRef.nativeElement.classList.add('notification-border-radius');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.i.currentValue === 0 && this.notificationContainerRef) {
      this.notificationContainerRef.nativeElement.classList.add('notification-border-radius');
    }
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
