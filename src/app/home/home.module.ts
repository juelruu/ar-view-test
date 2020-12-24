import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { Route, RouterModule } from '@angular/router';
import { HomeService } from './home.service';
import {DxCalendarModule} from 'devextreme-angular';

const routes: Route[] = [
  {path: '', component: PageComponent}
];

@NgModule({
  declarations: [PageComponent],
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
