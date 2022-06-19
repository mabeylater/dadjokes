import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppCard, AppNavigation, ProfanityFilterResponse, ProfanityTerm } from './models/app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navigation: AppNavigation = {
    title: "Dad Jokes",
    options: [
      {
        name: 'Find a Joke',
        action: () => { this.findAJoke = true },
        isActive: () => this.findAJoke
      },
      {
        name: 'Submit a Joke',
        action: () => { this.findAJoke = false },
        isActive: () => !this.findAJoke
      }
    ]
  }

  cards: Array<AppCard> = [
    {
      title: 'Find a Joke',
      subtitle: 'All the best dad jokes around',
      isActive: () => this.findAJoke,
      getBody() {
        return '<p>body<p>'
      },
      options: [
        {
          name: 'generate',
          action: () => { },
          isActive: () => true
        },
        {
          name: 'random',
          action: () => { },
          isActive: () => false
        },
      ]
    },
    {
      title: 'Submit a Joke',
      subtitle: 'All the best dad jokes around',
      isActive: () => !this.findAJoke,
      getBody() {
        return '<p>body<p>{{badWords | json}}'
      },
      options: [
        {
          name: 'generate',
          action: () => { this.saveJoke('test shit', 'test') },
          isActive: () => true
        }
      ]
    }
  ]

  findAJoke = true;

  jokes: Array<AppCard> = new Array();

  badWords: Array<ProfanityTerm> = new Array();

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    let i = 0;
    while(i <= 5){
      i++
      this.getJoke(i);
    }
  }

  getJoke(index: number) {
    const jokeDetails = `${this.navigation.title} ${index}`;
    const joke = {
      title: jokeDetails,
      subtitle: 'author - ??',
      isActive: () => this.findAJoke,
      getBody() {
        return jokeDetails;
      },
      options: [
        {
          name: 'Save',
          action: () => { },
          isActive: () => this.findAJoke
        }
      ]
    }
    this.jokes.push(joke);
  }

  saveJoke(joke: string, author: string) {
    const contentModeratorRequest = {
      url: '',
      body: joke,
      options:{
        headers: {
          'content-type': 'text/plain',
          'Ocp-Apim-Subscription-Key': ''
        }
      }
    }
    this.http.post(
      contentModeratorRequest.url,
      contentModeratorRequest.body,
      contentModeratorRequest.options)
      .subscribe(response => {
        const r = response as ProfanityFilterResponse
        if(r.Terms?.length > 0){
          this.badWords = r.Terms;
        }
        else
        {
          // todo: have a place to save these
        }
      });
  }
}
