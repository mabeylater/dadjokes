import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-cat-fact',
  templateUrl: './get-cat-fact.component.html',
  styleUrls: ['./get-cat-fact.component.scss']
})
export class GetCatFactComponent implements OnInit {

  catFactsUri = 'https://api.thecatapi.com/v1';
  currentCatFacts!: any[];
  showContent = false;
  catCategories!: { id: number, name: string }[]
  selectedCategory: number | null = null;
  limit = 6;
  apiKey: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getApiKey()
  }

  getApiKey() {
    this.http.get('https://45mzc4zp257aj5yeqm332baw5m0glphq.lambda-url.us-west-2.on.aws/')
    .subscribe((r:any) => {
      this.apiKey = r.Parameters[0].Value;
      this.getCatCategories();
      this.getCatImages();
    });
  }

  getCatImages(categoryId: number | null = null) {
    this.selectedCategory = categoryId;
    let requestUrl = `${this.catFactsUri}/images/search?limit=${this.limit}`;
    if (categoryId != null) {
      requestUrl += `&category_ids=${this.selectedCategory}`
    }
    const catFactsRequest = {
      url: requestUrl,
      options: {
        headers: {
          'content-type': 'text/plain',
          'x-api-key': this.apiKey
        }
      }
    }
    this.http.get(
      catFactsRequest.url,
      catFactsRequest.options)
      .subscribe(response => {
        const r = response as any[]
        this.currentCatFacts = r;
      });
  }

  getCatCategories() {
    const catFactsRequest = {
      url: `${this.catFactsUri}/categories`,
      options: {
        headers: {
          'content-type': 'text/plain',
          'x-api-key': this.apiKey
        }
      }
    }
    this.http.get(
      catFactsRequest.url,
      catFactsRequest.options)
      .subscribe(response => {
        const r = response as any[]
        this.catCategories = r;
      });
  }

  getCatFact() {
    this.selectedCategory = null;
    const catFactsRequest = {
      url: `${this.catFactsUri}/images/search?limit=${this.limit}`,
      options: {
        headers: {
          'content-type': 'text/plain',
          'x-api-key': this.apiKey
        }
      }
    }
    this.http.get(
      catFactsRequest.url,
      catFactsRequest.options)
      .subscribe(response => {
        const r = response as any[]
        this.currentCatFacts = r;
      });
  }
  getCatsByCategory(id?: number) {
    if (id) this.selectedCategory = id;
    const catFactsRequest = {
      url: `${this.catFactsUri}/images/search?limit=${this.limit}&category_ids=${this.selectedCategory}`,
      options: {
        headers: {
          'content-type': 'text/plain',
          'x-api-key': this.apiKey
        }
      }
    }
    this.http.get(
      catFactsRequest.url,
      catFactsRequest.options)
      .subscribe(response => {
        const r = response as any[]
        this.currentCatFacts = r;
      });
  }

  getImageUrl(url: string) {
    return url.substring(url.lastIndexOf('/') + 1, url.length);
  }
}
