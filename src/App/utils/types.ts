export interface MarginProp {
  $margin?: boolean;
}

export interface BitlyApiResponse {
  id?: string;
  link?: string;
  long_url?: string;
}

export interface State {
  links: {
    longUrl: string;
    links: { id: number; defaultLink?: string; shortenedLink?: string }[];
  };
}
