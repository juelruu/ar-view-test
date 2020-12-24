import { Injectable } from '@angular/core';
import { AppStore } from './app.store';
import {EventItem} from './app.model';

@Injectable({ providedIn: 'root' })
export class AppService {

  constructor(private appStore: AppStore) { }

  public add(event: EventItem): void {
    this.appStore.update(state => ({events: [...state.events, event]}));
  }
}
