import React from 'react';
import BookItem from './../BookItem/BookItem';
import { Book } from '../../types';

interface BookListProps {
  books: Book[];
  isFavoriteList?: boolean;
  isReadList?: boolean;
}

const BookList: React.FC<BookListProps> = ({ books, isFavoriteList = false, isReadList = false }) => (
  <div className="book-list">
    {books.map((book) => (
      <BookItem key={book.key} book={book} isFavorite={isFavoriteList} isRead={isReadList} />
    ))}
  </div>
);

export default BookList;
