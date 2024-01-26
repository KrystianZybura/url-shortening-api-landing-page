export interface MarginProp {
  $margin?: boolean;
}

export interface BitlyApiResponse {
  id?: string;
  link?: string;
  long_url?: string;
}

export interface State {
  longUrl: string;
  links: {
    links: { id: number; defaultLink: string; shortenedLink: string }[];
  };
}

export type Links = {
  id: number;
  defaultLink: string;
  shortenedLink: string;
}[];
