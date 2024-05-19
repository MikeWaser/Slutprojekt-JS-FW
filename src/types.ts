import { ReactNode } from "react";

export interface Book {
  [x: string]: ReactNode;
  key: string;
  title: string;
  author_name: string[];
  cover_i: number;
}

export interface ReadBook extends Book {
  rating: number;
  pages: number;
  review: string;
}

export interface State {
  favoriteBooks: Book[];
  readBooks: ReadBook[];
}

export interface Action {
  type: string;
  payload: any;
}
