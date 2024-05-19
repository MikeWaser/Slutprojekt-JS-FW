import React from 'react';
import "./ReadBooksPage.scss"
import BookList from '../../components/BookList/BookList';
import { useGlobalState } from '../../context/GlobalStateProvider';

const ReadBooksPage: React.FC = () => {
  const { state } = useGlobalState();

  return (
    <div className="container">
      <h1>Read Books</h1>
      {state.readBooks.length === 0 ? (
        <p>No read books.</p>
      ) : (
        <BookList books={state.readBooks} isReadList={true} />
      )}
    </div>
  );
};

export default ReadBooksPage;
