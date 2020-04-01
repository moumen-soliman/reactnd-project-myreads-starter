import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Title from "./Title";
import BookShelf from "./BookShelf";

const Home = props => {
  const { BooksData, BooksShelfs, onShelfSelector } = props;

  return (
    <>
      <div className="list-books">
        <Title currentClass="list-books-title">MyReads</Title>
        <div className="list-books-content">
          {BooksShelfs &&
            BooksShelfs.filter(function(elem, pos) {
              return BooksShelfs.indexOf(elem) === pos;
            }).map((shelf, index) => (
              <BookShelf
                key={index}
                BooksData={BooksData}
                BookShelfTitle={shelf}
                onShelfSelector={onShelfSelector}
              />
            ))}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  bookData: PropTypes.object,
  BooksShelfs: PropTypes.array.isRequired,
  onShelfSelector: PropTypes.func.isRequired
};

export default Home;
