import React from 'react';
import BookList from '../../components/BookList/BookList';
import { useGlobalState } from '../../context/GlobalStateProvider';
import './ReadBooksPage.scss';

const ReadBooksPage: React.FC = () => {
  const { state } = useGlobalState();

  return (
    <div className="container">
      <h1>Read Books</h1>
      {state.readBooks.length === 0 ? (
        <p>No read books.</p>
      ) : (
        <div className="read-books-list">
          <BookList books={state.readBooks} isReadList={true} />
          <div className="read-books-details">
            {state.readBooks.map(book => (
              <div key={book.key} className="book-details">
                <h3>{book.title}</h3>
                <p>Rating: {book.rating}</p>
                <p>Pages: {book.pages}</p>
                <p>Review: {book.review}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadBooksPage;
