import React, { useState } from 'react';
import './ReviewPopup.scss';

interface PopupProps {
  bookId: string;
  onSave: (rating: number, pages: number, review: string) => void;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ onSave, onClose }) => {
  const [rating, setRating] = useState<number>(1);
  const [pages, setPages] = useState<number>(0);
  const [review, setReview] = useState<string>('');

  const handleSave = () => {
    onSave(rating, pages, review);
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Rate the book</h3>
        <label>
          Rating:
          <input
            type="number"
            min="1"
            max="10"
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
          />
        </label>
        <label>
          Pages:
          <input
            type="number"
            min="0"
            value={pages}
            onChange={(e) => setPages(parseInt(e.target.value))}
          />
        </label>
        <label>
          Review:
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </label>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Popup;
