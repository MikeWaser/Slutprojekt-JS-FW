/* import React from 'react';
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
          <div className="book-list">
            {state.readBooks.map(book => (
              <div key={book.key} className="book-item">
                <img
                  src={`http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                  alt={book.title}
                />
                <h3 className="book-item-title">{book.title}</h3>
                <p className="book-item-authors">{book.author_name.join(', ')}</p>
              </div>
            ))}
          </div>
          <div className="read-books-details">
            {state.readBooks.map(book => (
              <div key={book.key} className="book-details">
                <h3>{book.title}</h3>
                <p><strong >Rating:</strong> {book.rating}/10</p>
                <p><strong >Pages:</strong> {book.pages}</p>
                <p><strong >Comment:</strong> {book.review}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadBooksPage;
 */