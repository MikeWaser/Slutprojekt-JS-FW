import axios from 'axios';

const API_URL = 'https://openlibrary.org';

export const searchBooks = async (query: string, page: number = 1, pageSize: number = 50) => {
  const response = await axios.get(`${API_URL}/search.json`, {
    params: { q: query, page, limit: pageSize },
  });
  return response.data;
};

export const getBookDetails = async (bookId: string) => {
  const response = await axios.get(`${API_URL}/works/${bookId}.json`);
  return response.data;
};