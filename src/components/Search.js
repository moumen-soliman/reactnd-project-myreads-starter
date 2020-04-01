import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Book from "./Book";

const Search = props => {
  const { onSearch, searchList, emptyList, onShelfSelector } = props;
  return (
    <>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              onChange={event => onSearch(event.target.value)}
              type="text"
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {!emptyList ? (
              searchList &&
              searchList.map((book, index) => (
                <li key={index}>
                  <Book onShelfSelector={onShelfSelector} bookData={book} />
                </li>
              ))
            ) : (
              <li>
                <Book
                  bookData={{
                    id: 0,
                    imageLinks: {
                      thumbnail:
                        "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/magnifying_glass.png"
                    },
                    title: "Book not found!"
                  }}
                />
              </li>
            )}
          </ol>
        </div>
      </div>
    </>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchList: PropTypes.array,
  emptyList: PropTypes.bool
};

export default Search;
