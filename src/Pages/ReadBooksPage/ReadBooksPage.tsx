import React from "react";
import { useGlobalState } from "../../context/GlobalStateProvider";
import "./ReadBooksPage.scss";

const ReadBooksPage: React.FC = () => {
  const { state, dispatch } = useGlobalState();

  const removeFromRead = (bookKey: string) => {
    dispatch({ type: "REMOVE_READ_BOOK", payload: bookKey });
  };

  return (
    <div className="container">
      <h1>Read Books</h1>
      {state.readBooks.length === 0 ? (
        <p>No read books.</p>
      ) : (
        <div className="read-books-list">
          {state.readBooks.map((book) => (
            <div key={book.key} className="book-details">
              <img
                src={`http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`}
                alt={book.title}
              />
              <h3>{book.title}</h3>
              <p>
                <strong>Author(s):</strong> {book.author_name.join(", ")}
              </p>
              {/* <h4>Review</h4> */}
              <p>
                <strong>Rating:</strong> {book.rating}
              </p>
              <p>
                <strong>Pages:</strong> {book.pages}
              </p>
              <p>
                <strong>Comment:</strong> {book.review}
              </p>
              <button
                className="remove-book-button"
                onClick={() => removeFromRead(book.key)}
              >
                Remove from Read
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReadBooksPage;
