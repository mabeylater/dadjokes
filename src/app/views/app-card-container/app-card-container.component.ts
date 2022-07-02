import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { ApiAppCard, AppCard } from 'src/app/models/app.models';

@Component({
  selector: 'app-card-container',
  templateUrl: './app-card-container.component.html',
  styleUrls: ['./app-card-container.component.scss']
})
export class AppCardContainerComponent {

  @Input() cards?: Array<ApiAppCard | AppCard>;
  @Input() alwaysShow?: boolean;
  @Output() deleteClick = new EventEmitter<{ id: string }>();

  onDeleteClick(id: string) {
    this.deleteClick.emit({ id });
  }
}
