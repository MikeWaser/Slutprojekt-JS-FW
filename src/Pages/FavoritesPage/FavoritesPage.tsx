import React from 'react';
import "./FavoritesPage.scss"
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
        <BookList books={state.favoriteBooks} isFavoriteList={true} />
      )}
    </div>
  );
};

export default FavoritesPage;