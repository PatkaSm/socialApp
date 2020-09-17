import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  notifications = [];

  constructor(@Inject(DOCUMENT) private document: Document) {

    this.notifications = [
      {
        "id": 1,
        "user": "Mike",
        "content": "Mechanical Grasshopper",
        "icon": "phone_iphone",
        "timestamp": new Date(),
        'is_liked': false
      },
      {
        "id": 2,
        "user": "Dash",
        "content": "Assistant App - Weather Module",
        "icon": "filter_drama",
        "timestamp": new Date(),
        'is_liked': false
      },
      {
        "id": 3,
        "user": "Ghulam :)",
        "content": "Upcoming web agency",
        "icon": "image",
        "timestamp": new Date(),
        'is_liked': false,
      },
      {
        "id": 4,
        "user": "Bill $ Kenney",
        "content": "Bamboo Branding Wall Piece -not flat",
        "icon": "system_update",
        "timestamp": new Date(),
        'is_liked': false

      },
      {
        "id": 5,
        "user": "Lena",
        "content": "Missed call",
        "icon": "call",
        "timestamp": new Date(),
        'is_liked': false
      },
    ]
   }

  ngOnInit(): void {

  }

  showMenu() {
    const nav = this.document.querySelector('.nav');
    const main = this.document.querySelector('.container');
    nav.classList.toggle('nav-active');
    main.classList.toggle('container-nav-push');
  }

  delete(notification) {
    console.log("Usuwam: " + notification.id);
    this.notifications = this.notifications.filter(({ id }) => id !== notification.id); 
  }

}
