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

export interface BookItemProps {
  book: Book;
  isFavorite?: boolean;
  isRead?: boolean;
}

export interface BookListProps {
  books: Book[];
  isFavoriteList?: boolean;
  isReadList?: boolean;
}

export interface BookDetailsPopupProps {
  book: Book;
  onClose: () => void;
}

export interface PopupProps {
  bookId: string;
  onSave: (rating: number, pages: number, review: string) => void;
  onClose: () => void;
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}