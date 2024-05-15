// src/components/BookItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../context/GlobalStateProvider';

interface BookItemProps {
  book: any;
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  const { state, dispatch } = useGlobalState();

  const isFavorite = state.favoriteBooks.some(favBook => favBook.id === book.key);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: book.key });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: { id: book.key, title: book.title, author: book.author_name?.join(', ') } });
    }
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author_name?.join(', ')}</p>
      <Link to={`/book/${book.key}`}>View Details</Link>
      <button onClick={toggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default BookItem;
