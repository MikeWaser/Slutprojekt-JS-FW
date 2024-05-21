import React, { useState } from 'react';
import { useGlobalState } from '../../context/GlobalStateProvider';
import { Book, ReadBook } from '../../types';
import Popup from '../ReviewPopup/ReviewPopup';
import BookDetailsPopup from '../DetailsPopup/DetailsPopup';
import './BookItem.scss';

interface BookItemProps {
  book: Book;
  isFavorite?: boolean;
  isRead?: boolean;
}

const BookItem: React.FC<BookItemProps> = ({
  book,
  isFavorite = false,
  isRead = false,
}) => {
  const { dispatch } = useGlobalState();
  const [showMore, setShowMore] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);

  const toggleFavorite = () => {
    if (isFavorite) {
      setAnimationClass("fade-out");
      setTimeout(() => {
        dispatch({ type: "REMOVE_FAVORITE", payload: book.key });
        setAnimationClass("");
      }, 300);
    } else {
      setAnimationClass("fade-in");
      dispatch({
        type: "ADD_FAVORITE",
        payload: {
          key: book.key,
          title: book.title,
          author_name: book.author_name,
          cover_i: book.cover_i,
        },
      });
    }
  };

  const handleSave = (rating: number, pages: number, review: string) => {
    const readBook: ReadBook = {
      ...book,
      rating,
      pages,
      review,
    };
    dispatch({
      type: "ADD_READ_BOOK",
      payload: readBook,
    });
  };

  const toggleRead = () => {
    if (isRead) {
      setAnimationClass("fade-out");
      setTimeout(() => {
        dispatch({ type: "REMOVE_READ_BOOK", payload: book.key });
        setAnimationClass("");
      }, 300);
    } else {
      setShowPopup(true);
    }
  };

  const coverUrl = book.cover_i
    ? `http://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/150";

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleViewDetails = () => {
    setShowDetailsPopup(true);
  };

  return (
    <div className={`book-item ${animationClass}`}>
      <img src={coverUrl} alt={book.title} />
      <h3 className="book-item-title">{book.title}</h3>
      <p className={`book-item-authors ${showMore ? "show-more" : ""}`}>
        {book.author_name.join(", ")}
      </p>
      {book.author_name.join(", ").length > 50 && (
        <button className="more-button" onClick={toggleShowMore}>
          {showMore ? "Less" : "More"}
        </button>
      )}
      <button className="details-button" onClick={handleViewDetails}>
        View Details
      </button>
      <button className="book-item-button" onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
      <button className="book-item-button" onClick={toggleRead}>
        {isRead ? "Remove from Read" : "Add to Read"}
      </button>
      {showPopup && (
        <Popup
          bookId={book.key}
          onSave={handleSave}
          onClose={() => setShowPopup(false)}
        />
      )}
      {showDetailsPopup && (
        <BookDetailsPopup book={book} onClose={() => setShowDetailsPopup(false)} />
      )}
    </div>
  );
};

export default BookItem;
