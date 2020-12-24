import { Component, OnInit } from '@angular/core';
import {AppQuery} from '../../store/app.query';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public value = new Date();

  constructor(public query: AppQuery) { }

  ngOnInit(): void {
  }

  public test(e: Date): void {
    console.log(e.toDateString());
  }

}
