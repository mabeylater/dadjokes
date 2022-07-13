import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from '../models/api';
import { ApiResponseKeys, ApiService } from '../services/api.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {
  isAuthenticated: boolean;
  hideFilter = false;
  hideToolbar = false;
  allTags: Tag[];

  selectedTag: Tag;

  constructor(
    private global: GlobalService,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.checkAuth()
      .then(() => {
        this.getAllTags().then(() => {
          this.subscribeToRoute();
        });
      });
  }

  async checkAuth() {
    await this.global.getIsAuthenticatedAsync();
    this.isAuthenticated = this.global.isAuthenticated;
  }

  subscribeToRoute() {
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.has('id')) {
        this.hideFilter = true;
        this.hideToolbar = paramMap.get('id') === 'create';
      }
    })
  }

  async getAllTags() {
    const tagResponse = await this.apiService.getAllTagsAsync();
    this.allTags = tagResponse.data[ApiResponseKeys.listTags]?.items;
  }

  filter(tag: Tag) {
    this.router.navigate(['/jokes'], { queryParams: { tagId: tag.id } });
  }
}
