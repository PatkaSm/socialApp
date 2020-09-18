import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { IEmail } from '../interface/email.interface';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  emails = [
    {
      id: 1,
      author: 'Mike',
      content: '',
      title: 'Hello you!',
      timestamp: new Date(),
    },
    {
      id: 2,
      author: 'Dash',
      content: '',
      title: 'Work things',
      timestamp: new Date(),
    },
    {
      id: 3,
      author: 'Ghulam',
      content: '',
      title: 'Upcoming web agency',
      timestamp: new Date(),
    },
    {
      id: 4,
      author: 'Bill',
      content: '',
      title: 'You should see it',
      timestamp: new Date(),
    },
    {
      id: 5,
      author: 'Lena',
      content: '',
      title: "You don't answer the phone",
      timestamp: new Date(),
    },
  ];

  private menu$: BehaviorSubject<Boolean>;
  private emails$: BehaviorSubject<IEmail[]>;

  constructor() {
    this.menu$ = new BehaviorSubject<Boolean>(false);
    this.emails$ = new BehaviorSubject<IEmail[]>(this.emails);
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

   get emailList(): Observable<IEmail[]> {
    return this.emails$.asObservable();
   }
}
