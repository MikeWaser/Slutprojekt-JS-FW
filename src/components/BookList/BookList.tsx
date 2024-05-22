import React from 'react';
import "./BookList.scss"
import BookItem from './../BookItem/BookItem';
import { BookListProps } from '../../types';


const BookList: React.FC<BookListProps> = ({ books, isFavoriteList = false, isReadList = false }) => (
  <div className="book-list">
    {books.map((book) => (
      <BookItem key={book.key} book={book} isFavorite={isFavoriteList} isRead={isReadList} />
    ))}
  </div>
);

export default BookList;
