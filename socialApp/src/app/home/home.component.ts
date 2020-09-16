import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  showMenu() {
    const nav = this.document.querySelector('.nav');
    const main = this.document.querySelector('.container');
    nav.classList.toggle('nav-active');
    main.classList.toggle('container-nav-push');
  }

}
