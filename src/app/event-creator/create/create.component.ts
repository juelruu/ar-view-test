import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventType, EventData, HolidayData, OtherData, EventItem} from '../../store/app.model';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {AppService} from '../../store/app.service';

type K = keyof HolidayData;

@Component({
  selector: 'app-event-creator',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  public date: string;
  public types = Object.values(EventType).filter(item => typeof item === 'string');
  public selectedType: EventType = EventType.Event;
  public rows = [];

  constructor(private activatedRoute: ActivatedRoute, private service: AppService, private router: Router) {
    this.date = this.activatedRoute.snapshot.params.date;
  }

  createEvent(form: NgForm): void {
    console.table(form.form.value);
    const event: EventItem = {
      date: this.date,
      type: this.selectedType,
      title: form.form.value.title,
      data: null
    };

    switch (this.selectedType) {
      case EventType.Other:
        event.data = { other1: form.form.value.other1, other2: form.form.value.other2 };
        break;
      case EventType.Holiday:
        event.data = { text1: form.form.value.text1, text2: form.form.value.text2 };
        break;
      case EventType.Event:
        event.data = { arg1: form.form.value.arg1, arg2: form.form.value.arg2 };
        break;
    }

    this.service.add(event);
    this.router.navigate(['/home']);
  }

  selectType(type: string): void {
    this.selectedType = EventType[type];
  }
}
