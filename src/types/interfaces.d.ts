export interface Range {
  from: number;
  to: number;
}

export interface Card {
  id: number;
  imageUrl: string;
  tag: string;
  location: string;
  name: string;
  fromdate: string;
  todate: string;
  content: string;
  price: number;
}

export interface CardsResponse {
  cards: Card[];
}
