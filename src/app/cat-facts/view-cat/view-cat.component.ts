import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-view-cat',
  templateUrl: './view-cat.component.html',
  styleUrls: ['./view-cat.component.scss']
})
export class ViewCatComponent implements OnInit {

  catImageName!: string;
  baseCatImageUrl = 'https://cdn2.thecatapi.com/images/';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.catImageName = this.route.snapshot.queryParamMap.get('catImageName') as string;
  }

}
