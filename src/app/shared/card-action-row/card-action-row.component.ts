import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, map, Observable, startWith } from 'rxjs';
import { JokeTags, Tag } from 'src/app/models/api';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { ApiResponseKeys, ApiService, SingleItemApiResponse } from 'src/app/services/api.service';
import { MatChipInputEvent } from '@angular/material/chips';


@Component({
  selector: 'app-card-action-row',
  templateUrl: './card-action-row.component.html',
  styleUrls: ['./card-action-row.component.scss']
})
export class CardActionRowComponent implements OnInit {

  @Input() itemId?: string;
  @Input() queryParams?: { [key: string]: string }
  @Input() link?: string;
  @Input() canEdit?: boolean;
  @Input() tags?: any[];
  @Input() isJoke?: boolean;
  @Output() tagSelected = new EventEmitter<Tag>();
  @Output() itemDeleted = new EventEmitter<string>();
  @Output() updateTags = new EventEmitter<Tag[]>();

  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagControl = new FormControl('');
  @ViewChild('tagInput') tagInput: ElementRef<HTMLInputElement>;
  filteredTags?: Observable<Tag[]>;
  allTags?: Tag[];
  jokeTags: JokeTags[];
  tagMap = new Map<string, Tag>();

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    if (this.isJoke) {
      this.getAllTags().then(() => {
        this.getAllJokeTagsByItemId();
      });
      if (this.canEdit) {
        this.filteredTags = this.tagControl.valueChanges.pipe(
          startWith(null),
          debounceTime(500),
          map((value: string | null) => (value ? this._filter(value) : null)),
        );
      }
    }
  }

  onTagSelected(tag: Tag) {
    this.tagSelected.emit(tag);
  }

  onDeleteClick() {
    this.itemDeleted.emit(this.itemId);
  }

  onUpdateTags() {
    this.updateTags.emit(this.tags);
  }

  removeTag(tagId: string) {
    this.tags = this.tags?.filter(t => t.id != tagId);
    this.api.deleteJokeTagsByTagIdAsync(this.itemId, tagId)
      .then(async (r) => {
        try {
          return await this.getAllJokeTagsByItemId();
        } catch (err) {
          return console.error(err);
        }
      })
      .catch(err => console.error(err));
  }

  addTag(tag: Tag) {
    if (!this.tags) {
      this.tags = new Array<Tag>();
    }
    this.tryCreateTag(tag.name);
    this.tagInput.nativeElement.value = '';
    this.tagControl.setValue(null);
  }

  findAndAddTag(chipEvent: MatChipInputEvent) {
    const value = (chipEvent.value || '').trim();
    chipEvent.chipInput!.clear();
    this.tagControl.setValue(null);
    if (value) {
      this.tryCreateTag(value);
    }
  }

  tryCreateTag(tagName: string) {
    let tag = this.allTags?.find(t => t.name = tagName);
    if (tag) {
      this.tags.push(tag);
      this.createJokeTag(this.itemId, tag.id)
    } else {
      this.api.createTagAsync({ name: tagName })
        .then((r) => {
          tag = r.data[ApiResponseKeys.createTag]
          this.tags.push(tag);
          this.createJokeTag(this.itemId, tag.id)
        })
        .catch(err => console.error(err));
    }

    this.getAllJokeTagsByItemId().catch(err => console.error(err));
  }

  async getAllTags() {
    const tagResponse = await this.api.getAllTagsAsync();
    this.allTags = tagResponse.data[ApiResponseKeys.listTags]?.items;
    for (const tag of this.allTags) {
      if (!this.tagMap.has(tag.id)) {
        this.tagMap.set(tag.id, tag);
      }
    }
  }

  getTagName(tagId: string) {
    const match = this.tagMap.get(tagId);
    return match?.name;
  }

  async getAllJokeTagsByItemId() {
    const jokeTagsResponse = await this.api.getJokeTagsByJokeIdAsync(this.itemId);
    this.jokeTags = jokeTagsResponse.data[ApiResponseKeys.listJokeTags].items;
    this.getJokeTagNames(this.jokeTags);
  }

  async createJokeTag(jokeId: string, tagId: string) {
    const createRes = await this.api.createJokeTags(jokeId, tagId);
    return createRes.data[ApiResponseKeys.createJokeTags];
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

  getJokeTagNames(jokeTags: JokeTags[]) {
    this.tags = jokeTags ? jokeTags.map(jt => this.tagMap.get(jt.tagID)) : null;
  }
}
