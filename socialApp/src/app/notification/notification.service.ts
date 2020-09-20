import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { INotification } from '../interface/notification.interface';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  
  notifications = [
    {
      id: 1,
      user: 'Mike',
      content: 'Mechanical Grasshopper',
      icon: 'phone_iphone',
      timestamp: new Date(),
      isLiked: false,
    },
    {
      id: 2,
      user: 'Dash',
      content: 'Assistant App - Weather Module',
      icon: 'filter_drama',
      timestamp: new Date("2020-09-19T04:22:00Z"),
      isLiked: false,
    },
    {
      id: 3,
      user: 'Ghulam :)',
      content: 'Upcoming web agency',
      icon: 'image',
      timestamp: new Date("2020-09-19T12:00:00Z"),
      isLiked: false,
    },
    {
      id: 4,
      user: 'Bill $ Kenney',
      content: 'Bamboo Branding Wall Piece -not flat',
      icon: 'system_update',
      timestamp: new Date("2020-09-19T00:00:00Z"),
      isLiked: false,
    },
    {
      id: 5,
      user: 'Lena',
      content: 'Missed call',
      icon: 'call',
      timestamp: new Date(),
      isLiked: false,
    },
  ];

  private notifications$: BehaviorSubject<INotification[]>;

  constructor() { 

  this.notifications$ = new BehaviorSubject<INotification[]>(this.notifications)

  }

  get _allNotifications(): Observable<INotification[]> {
    return this.notifications$.asObservable();
  }
  
  deleteNotification(id: number) {
    this.notifications$.next(this.notifications$.getValue().filter(norification => norification.id !== id));
  }

  likeNotificationToggle(notification: INotification) {
    this.notifications$.next(this.notifications$.getValue().map(e => {
      if (e.id === notification.id) {
        e.isLiked = !(notification.isLiked)
      }
      return e;
    })); 
    
}

}
