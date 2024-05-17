import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../context/GlobalStateProvider';
import { Book } from '../../types';

interface BookItemProps {
  book: Book;
  isFavorite?: boolean;
}

const BookItem: React.FC<BookItemProps> = ({ book, isFavorite = false }) => {
  const { dispatch } = useGlobalState();
  const [showMore, setShowMore] = useState(false);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: book.key });
    } else {
      dispatch({
        type: 'ADD_FAVORITE',
        payload: {
          key: book.key,
          title: book.title,
          author_name: book.author_name,
          cover_i: book.cover_i,
        },
      });
    }
  };

  const addToRead = () => {
    dispatch({
      type: 'ADD_READ_BOOK',
      payload: {
        key: book.key,
        title: book.title,
        author_name: book.author_name,
        cover_i: book.cover_i,
      },
    });
  };

  const coverUrl = book.cover_i
    ? `http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : 'https://via.placeholder.com/100';

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="book-item">
      <img src={coverUrl} alt={book.title} />
      <h3 className="book-item-title">{book.title}</h3>
      <p className={`book-item-authors ${showMore ? 'show-more' : ''}`}>{book.author_name.join(', ')}</p>
      {book.author_name.join(', ').length > 50 && (
        <button className="more-button" onClick={toggleShowMore}>
          {showMore ? 'Less' : 'More'}
        </button>
      )}
      <Link className="book-item-details-link" to={`/book/${book.key}`}>View Details</Link>
      <button className="book-item-button" onClick={toggleFavorite}>
        {isFavorite ? 'Remove' : 'Add to Favorites'}
      </button>
      <button className="book-item-button" onClick={addToRead}>Add to Read</button>
    </div>
  );
};

export default BookItem;
