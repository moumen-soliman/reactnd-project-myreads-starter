import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";
import Title from "./Title";

const BookShelf = props => {
  const { BooksData, BookShelfTitle, onShelfSelector } = props;

  return (
    <>
      <div className="bookshelf">
        <Title currentClass="bookshelf-title">{BookShelfTitle}</Title>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {BooksData &&
              BooksData.filter(book => book.shelf === BookShelfTitle).map(
                (book, index) => (
                  <li key={index}>
                    <Book onShelfSelector={onShelfSelector} bookData={book} />
                  </li>
                )
              )}
          </ol>
        </div>
      </div>
    </>
  );
};

BookShelf.propTypes = {
  bookData: PropTypes.object,
  BookShelfTitle: PropTypes.string.isRequired,
  onShelfSelector: PropTypes.func.isRequired
};

export default BookShelf;
