import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiAppCard, AppNavigation, ProfanityFilterResponse, ProfanityTerm } from './models/app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  badWords: Array<ProfanityTerm> = new Array();

  constructor(
    private http: HttpClient
  ) {

  }

  ngOnInit() {

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
