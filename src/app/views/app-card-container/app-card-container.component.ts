import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { ApiAppCard } from 'src/app/models/app.models';

@Component({
  selector: 'app-card-container',
  templateUrl: './app-card-container.component.html',
  styleUrls: ['./app-card-container.component.scss']
})
export class AppCardContainerComponent {

  @Input() cards?: Array<ApiAppCard>;
  @Input() alwaysShow?: boolean;
}
