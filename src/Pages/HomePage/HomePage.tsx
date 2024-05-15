import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import BookList from '../../components/BookList/BookList';
import useBookSearch from '../../hooks/useBookSearch';

const HomePage: React.FC = () => {
  const [query, setQuery] = useState('');
  const { books, loading, error } = useBookSearch(query);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return (
    <div className="container">
      <h1>Book Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {books && <BookList books={books} />}
    </div>
  );
};

export default HomePage;
