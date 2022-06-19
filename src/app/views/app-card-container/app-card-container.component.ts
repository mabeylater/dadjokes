import { Component, Input, OnInit } from '@angular/core';
import { AppCard } from 'src/app/models/app.models';

@Component({
  selector: 'app-card-container',
  templateUrl: './app-card-container.component.html',
  styleUrls: ['./app-card-container.component.scss']
})
export class AppCardContainerComponent {

  @Input() cards?: Array<AppCard>;
  @Input() alwaysShow?: boolean;

}
