import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AppState, EventItem } from './app.model';
import { AppStore } from './app.store';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AppQuery extends Query<AppState> {

  constructor(protected store: AppStore) {
    super(store);
  }

  public getEvents$(date: string): Observable<EventItem[]> {
    return this.select(store => store.events.filter(item => item.date === date));
  }

}
