import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  emails = [];

  constructor(@Inject(DOCUMENT) private document: Document) { 

    this.emails = [
      {
        "id": 1,
        "author": "Mike",
        "content": "",
        "title": "Hello you!",
        "timestamp": new Date(),
      },
      {
        "id": 2,
        "author": "Dash",
        "content": "",
        "title": "Work things",
        "timestamp": new Date(),
      },
      {
        "id": 3,
        "author": "Ghulam",
        "content": "",
        "title": "Upcoming web agency",
        "timestamp": new Date(),
      },
      {
        "id": 4,
        "author": "Bill",
        "content": "",
        "title": "You should see it",
        "timestamp": new Date(),

      },
      {
        "id": 5,
        "author": "Lena",
        "content": "",
        "title": "You don't answer the phone",
        "timestamp": new Date(),
      },
    ]
   }


  ngOnInit(): void {
  }

  showEmails(navOption) {
    let list = this.document.querySelector('#mail-list');
    list.classList.toggle("nav-item-list-active");
    let nav_box = navOption
    navOption.classList.toggle("nav-box-active");
  }

}
