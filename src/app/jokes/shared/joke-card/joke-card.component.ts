import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CreateJokeInput, Joke, Tag, UpdateJokeInput } from 'src/app/models/api';
import { ApiAppCard, AppCard } from 'src/app/models/app.models';

@Component({
  selector: 'app-joke-card',
  templateUrl: './joke-card.component.html',
  styleUrls: ['./joke-card.component.scss']
})
export class JokeCardComponent {

  @Input() cards?: Array<ApiAppCard | AppCard>;
  @Input() alwaysShow?: boolean;
  @Output() deleteClick = new EventEmitter<{ id: string }>();

  onDeleteClick(id?: string) {
    if (id) this.deleteClick.emit({ id });
  }
}
