import axios from 'axios';

const API_URL = 'https://openlibrary.org';

export const searchBooks = async (query: string) => {
  const response = await axios.get(`${API_URL}/search.json`, {
    params: { q: query },
  });
  return response.data;
};

export const getBookDetails = async (bookId: string) => {
  const response = await axios.get(`${API_URL}/works/${bookId}.json`);
  return response.data;
};


/* import axios from 'axios';

export const getBookDetails = async (id: string) => {
  try {
    const response = await axios.get(`https://openlibrary.org/works/${id}.json`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch book details');
  }
}; */