import { DOCUMENT } from '@angular/common';
import { EventEmitter, Input, Output } from '@angular/core';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() notification;
  @Output() delete;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.delete = new EventEmitter();
   }

  ngOnInit(): void {
  }

  slide(notifi_box) {
    let notification = notifi_box.children[0];
    let notification_options = notifi_box.children[1];
    notification.classList.toggle('notification-slide-push');
    notification_options.classList.toggle('notification-options-active');
  }

  like_toggle(event) {
    event.stopPropagation();
    if(this.notification.is_liked === true){
      this.notification.is_liked = false;
    }
    else {
      this.notification.is_liked = true;
    } 
  }
}
