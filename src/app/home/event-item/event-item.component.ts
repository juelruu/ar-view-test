import { Component, Input } from '@angular/core';
import { EventItem } from '../../store/app.model';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent{

  @Input() item: EventItem;

  constructor() { }
}
