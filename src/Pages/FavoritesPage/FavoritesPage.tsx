import React from 'react';
import BookList from '../../components/BookList/BookList';
import { useGlobalState } from '../../context/GlobalStateProvider';

const FavoritesPage: React.FC = () => {
  const { state } = useGlobalState();

  return (
      <div className="container">
      <h1>Favorite Books</h1>
      {state.favoriteBooks.length === 0 ? (
        <p>No favorite books.</p>
      ) : (
        <BookList books={state.favoriteBooks} />
      )}
    </div>
  );
};

export default FavoritesPage;
