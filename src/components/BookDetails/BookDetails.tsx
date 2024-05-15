import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBookDetails } from '../../utils/api';

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const data = await getBookDetails(id);
        setBook(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p><strong>First Sentence:</strong> {book.first_sentence}</p>
      <p><strong>Genres:</strong> {book.subjects?.join(', ')}</p>
      <img src={`http://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`} alt={book.title} />
    </div>
  );
};

export default BookDetails;
