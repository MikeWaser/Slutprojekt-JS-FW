import React from 'react';
import './DetailsPopup.scss';
import { BookDetailsPopupProps } from '../../types';


const BookDetailsPopup: React.FC<BookDetailsPopupProps> = ({ book, onClose }) => {
  const coverUrl = book.cover_i
    ? `http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : 'https://via.placeholder.com/150';

  return (
    <div className="book-details-popup-overlay">
      <div className="book-details-popup">
        <button className="close-button" onClick={onClose}>×</button>
        <div className="popup-content">
          <img src={coverUrl} alt={book.title} className="book-cover" />
          <div className="book-info">
            <h3>{book.title}</h3>
            <p><strong>Author(s):</strong> {book.author_name.join(', ')}</p>
            <p><strong>Genre:</strong> {book.subject?.join(', ') || 'N/A'}</p>
            <p><strong>Description:</strong> {book.first_sentence || 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPopup;
