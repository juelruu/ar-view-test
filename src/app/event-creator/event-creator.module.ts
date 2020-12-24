import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import { CreateComponent } from './create/create.component';
import {FormsModule} from '@angular/forms';

const routes: Route[] = [
  { path: ':date', component: CreateComponent }
];

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
  exports: [
    RouterModule
  ]
})
export class EventCreatorModule { }
