import React from 'react';
import BookItem from '../BookItem/BookItem';
import { Book } from '../../types';

interface BookListProps {
  books: Book[];
  isFavoriteList?: boolean;
}

const BookList: React.FC<BookListProps> = ({ books, isFavoriteList = false }) => (
  <div className="book-list">
    {books.map((book) => (
      <BookItem key={book.key} book={book} isFavorite={isFavoriteList} />
    ))}
  </div>
);

export default BookList;