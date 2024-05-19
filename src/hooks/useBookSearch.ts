import { useState, useEffect } from 'react';
import { Book } from '../types';
import { searchBooks } from '../utils/api';

const useBookSearch = (query: string, page: number, pageSize: number) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) return;

    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await searchBooks(query, page, pageSize);
        if (page === 1) {
          setBooks(response.docs);
        } else {
          setBooks(prevBooks => [...prevBooks, ...response.docs]);
        }
      } catch (err) {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [query, page, pageSize]);

  return { books, loading, error };
};

export default useBookSearch;