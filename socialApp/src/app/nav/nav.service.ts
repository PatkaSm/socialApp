import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private menu$: BehaviorSubject<Boolean>;


  constructor() {
    this.menu$ = new BehaviorSubject<Boolean>(false);
   }

   openNav() {
      this.menu$.next(true);
   }

   closeNav() {
    this.menu$.next(false);
 }

  navToggle() {
    this.menu$.next(!this.menu$.getValue())
  }

   get showMenu(): Observable<Boolean> {
     return this.menu$.asObservable();
   }
}
