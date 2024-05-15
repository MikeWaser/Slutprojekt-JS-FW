import React from 'react';
import BookItem from '../BookItem/BookItem';

interface BookListProps {
  books: any[];
}

const BookList: React.FC<BookListProps> = ({ books }) => (
  <div>
    {books.map((book) => (
      <BookItem key={book.key} book={book} />
    ))}
  </div>
);

export default BookList;
