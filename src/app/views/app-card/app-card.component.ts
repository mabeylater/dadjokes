import { Component, Input, OnInit } from '@angular/core';
import { ApiAppCard } from 'src/app/models/app.models';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.scss']
})
export class AppCardComponent {

  @Input() card?: ApiAppCard;
}
