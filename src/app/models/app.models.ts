export interface AppNavigation {
  title: string;
  options: Array<AppNavigationOption>
}

export interface AppNavigationOption {
  name: string;
  action(): void;
  isActive(): boolean;
}

export interface AppCard extends AppNavigation{
  subtitle?: string;
  getBody(): string;
  imageLinks?: Array<string>;
  isActive(): boolean;
  maxWidth?: string;
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
