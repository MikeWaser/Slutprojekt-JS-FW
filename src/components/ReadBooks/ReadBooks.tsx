import React from 'react';
import { useGlobalState } from '../../context/GlobalStateProvider';

const ReadBooks: React.FC = () => {
  const { state } = useGlobalState();

  return (
    <div className="container">
      <h1>Read Books</h1>
      {state.readBooks.length === 0 ? (
        <p>No read books.</p>
      ) : (
        state.readBooks.map((book) => (
          <div key={book.id} className="book-item">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p><strong>Rating:</strong> {book.rating}</p>
            <p><strong>Review:</strong> {book.review}</p>
            <p><strong>Pages:</strong> {book.pages}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReadBooks;
