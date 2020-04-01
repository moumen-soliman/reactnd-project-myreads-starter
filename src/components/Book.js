import React from "react";
import PropTypes from "prop-types";

const Book = props => {
  const { bookData, onShelfSelector } = props;

  return (
    <>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${bookData.imageLinks.thumbnail})`
            }}
          ></div>

          {bookData.authors && (
            <div className="book-shelf-changer">
              <select
                defaultValue={bookData.shelf}
                onChange={event =>
                  onShelfSelector(bookData, event.target.value)
                }
              >
                >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          )}
        </div>
        <div className="book-title">{bookData.title}</div>
        {bookData.authors &&
          bookData.authors.map((author, index) => (
            <div key={index} className="book-authors">
              {author}
            </div>
          ))}
      </div>
    </>
  );
};

Book.propTypes = {
  bookData: PropTypes.object.isRequired,
  onShelfSelector: PropTypes.func
};

export default Book;
