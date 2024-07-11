export interface Event {
  slug: string;
  name: string;
  poster: Asset;
  date: string;
  location: Location;
  description?: string;
  price?: number;
  lineupCollection?: {
    items: Artist[];
  };
}

export interface Location {
  name: string;
  city: string;
}

interface Artist {
  name: string;
}

interface Asset {
  url: string;
}
