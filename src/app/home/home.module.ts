import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { Route, RouterModule } from '@angular/router';
import { HomeService } from './home.service';
import {DxCalendarModule} from 'devextreme-angular';
import { EventItemComponent } from './event-item/event-item.component';
import { EntiresPipe } from './event-item/entires.pipe';

const routes: Route[] = [
  {path: '', component: PageComponent}
];

@NgModule({
  declarations: [PageComponent, EventItemComponent, EntiresPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DxCalendarModule
  ],
  providers: [
    HomeService
  ],
  exports: [
    RouterModule
  ]
})
export class HomeModule { }
