import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import BookList from '../../components/BookList/BookList';
import useBookSearch from '../../hooks/useBookSearch';
import './HomePage.scss';

const HomePage: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const pageSize = 50;
  const { books, loading, error } = useBookSearch(query, page, pageSize);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setPage(2);
  };

  const loadMoreBooks = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="container">
      <h1>Book Search</h1>
      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <BookList books={books} />
      {books.length > 0 && (
        <button className="more-books-button" onClick={loadMoreBooks}>
          &#8595;
        </button>
      )}
    </div>
  );
};

export default HomePage;
