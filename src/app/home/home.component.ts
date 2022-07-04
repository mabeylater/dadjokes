import { Component, OnInit } from '@angular/core';
import { AppCard } from '../models/app.models';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isAuthenticated!: boolean;

  cards: Array<AppCard> = [
    new AppCard(
      'Jokes',
      undefined,
      'View All Jokes or Your Submitted Jokes',
      ['/jokes'],
      true,
      false,
      false
    ),
    // new AppCard(
    //   'Favorites',
    //   undefined,
    //   'View All Jokes or Your Submitted Jokes',
    //   ['/favorites'],
    //   true,
    //   false,
    //   false
    // ),
    new AppCard(
      'Cat Facts',
      undefined,
      'Curios About Cats?',
      ['/cat-facts'],
      true,
      false,
      false
    )
  ]

  constructor(
    private global: GlobalService
  ) { }

  ngOnInit(): void {
    this.getAuthnedUser();
  }

  async getAuthnedUser() {
    await this.global.getIsAuthenticatedAsync();
    this.isAuthenticated = this.global.isAuthenticated;
  }
}
