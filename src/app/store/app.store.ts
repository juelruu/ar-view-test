import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {AppState, createInitialState } from './app.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'app' })
export class AppStore extends Store<AppState> {

  constructor() {
    super(createInitialState());
  }

}
