import { Favorites, Joke } from "./api";

export interface AppNavigation {
  title: string;
  options: Array<AppNavigationOption>
}

export interface AppNavigationOption {
  name: string;
  routerLink?: string;
  icon?: string;
  iconOnly?: boolean;
  visible?: boolean;
}

export class AppCard {
  title?: string;
  subtitle?: string;
  content?: string;
  routerLink?: Array<string>
  showView?: boolean;
  showDelete?: boolean;
  showFavorite?: boolean;

  constructor(
    title?: string,
    subtitle?: string,
    content?: string,
    routerLink?: Array<string>,
    showView?: boolean,
    showDelete?: boolean,
    showFavorite?: boolean,
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.content = content;
    this.routerLink = routerLink;
    this.showView = showView;
    this.showDelete = showDelete;
    this.showFavorite = showFavorite;
  }
}
export class ApiAppCard extends AppCard {
  constructor(
    joke?: Joke,
    showView: boolean = true,
    showDelete: boolean = false,
    showFavorite: boolean = true,
  ) {
    super()
    if (joke) {
      this.title = 'Joke';
      this.subtitle = joke.author || 'unknown';
      this.content = joke.text || 'unknown';
      this.routerLink = ['/jokes', joke.id];
      this.showView = showView
      this.showDelete = showDelete
      this.showFavorite = showFavorite
    }
  }
}

export interface ProfanityFilterResponse {
  OriginalText: string;
  NormalizedText: string;
  Language: string;
  Terms: Array<ProfanityTerm>;
  Status: ProfanityFilterRequestStatus;
  TrackingId: string;
}

export interface ProfanityTerm {
  Index: number;
  OriginalIndex: number;
  ListId: number;
  Term: string;
}

export interface ProfanityFilterRequestStatus {
  Code: number;
  Description: string
  Exception: any;
}
