import { Component, OnInit } from '@angular/core';
import { AppNavigation } from '../models/app.models';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  isAuthenticated: boolean = false;
  navigation!: AppNavigation;

  constructor(
    private global: GlobalService
  ) { }

  ngOnInit(): void {
    this.checkIfAuthenticated().then(bool => {
      console.log(bool);
      this.setUpNavigation(bool);
    });
  }

  async checkIfAuthenticated() {
    await this.global.getIsAuthenticatedAsync();
    this.isAuthenticated = this.global.isAuthenticated;
    return this.isAuthenticated;
  }

  setUpNavigation(isAuthenticated: boolean) {
    this.navigation = {
      title: "Dad Jokes",
      options: [
        {
          name: 'Jokes',
          routerLink: '/jokes',
          visible: true
        },
        {
          name: 'Cats',
          routerLink: '/cats',
          visible: true
        },
        // {
        //   name: 'Favorites',
        //   routerLink: '/favorites',
        //   visible: isAuthenticated
        // },
        {
          name: 'Account',
          routerLink: '/login',
          icon: 'account_circle',
          iconOnly: true,
          visible: true
        }
      ]
    }
  }
}
