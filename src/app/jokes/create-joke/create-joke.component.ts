import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CreateJokeInput, CreateTagInput, Tag } from 'src/app/models/api';
import { ApiResponseKeys, ApiService } from 'src/app/services/api.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-create-joke',
  templateUrl: './create-joke.component.html',
  styleUrls: ['./create-joke.component.scss']
})
export class CreateJokeComponent implements OnInit {

  joke: CreateJokeInput = {};
  isAuthenticated!: boolean;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl('');
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  filteredTags: Observable<Tag[]>;
  tags: CreateTagInput[];
  allTags: Tag[];
  tagMap = new Map<string, Tag>();;

  constructor(
    private apiService: ApiService,
    private global: GlobalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllTags();
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      debounceTime(500),
      map((value: string | null) => (value ? this._filter(value) : null)),
    );
  }

  private _filter(initialValue: string | Tag): Tag[] | undefined {
    let value: string
    if (initialValue && typeof (initialValue) === 'string') {
      value = initialValue.toLowerCase();
    } else {
      value = (initialValue as Tag).name.toLowerCase();
    }

    const filterValue = value?.toLowerCase();
    return this.allTags?.filter(tag => tag.name?.toLowerCase().includes(filterValue));
  }

  addTag(chipEvent: MatChipInputEvent) {
    if (!this.tags) this.tags = [];
    const value = (chipEvent.value || '').trim();
    chipEvent.chipInput!.clear();
    this.tagCtrl.setValue(null);
    if (value) {
      this.tags.push({ name: value })
    }
  }

  removeTag(tag: CreateTagInput) {
    this.tags = this.tags.filter(t => t !== tag);
  }

  tagSelected(event: MatAutocompleteSelectedEvent): void {
    if (!this.tags) this.tags = [];
    this.tags.push({ name: event.option.viewValue });
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  async getAllTags() {
    const tagResponse = await this.apiService.getAllTagsAsync();
    this.allTags = tagResponse.data[ApiResponseKeys.listTags]?.items;
    for (const tag of this.allTags) {
      if (!this.tagMap.has(tag.name)) {
        this.tagMap.set(tag.name, tag);
      }
    }
  }

  async createJoke() {
    await this.global.getIsAuthenticatedAsync();
    this.isAuthenticated = this.global.isAuthenticated;
    const request = await this.apiService.createJokeAsync(this.joke)
    const joke = request.data[ApiResponseKeys.createJoke];

    if (this.tags?.length > 0) {
      for (const tagToCreate of this.tags) {
        if (!this.tagMap.has(tagToCreate.name)) {
          const tagReq = await this.apiService.createTagAsync(tagToCreate);
          const tag = tagReq.data[ApiResponseKeys.createTag];
          await this.apiService.createJokeTags(joke.id, tag.id);
        }
        else {
          const existingTag = this.tagMap.get(tagToCreate.name);
          await this.apiService.createJokeTags(joke.id, existingTag.id);
        }
      }
    }

    this.router.navigate(['/jokes'], { queryParams: { myJokes: true } })
  }

}
