import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Search from "./components/Search";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    BooksData: null,
    BooksShelfs: [],
    query: "",
    searchList: null,
    emptyList: false
  };

  changeShelf = (book, updatedShelf) => {
    BooksAPI.update(book, updatedShelf);
    this.getBooks();
  };

  getBooks = () => {
    BooksAPI.getAll().then(res => {
      this.setState({ BooksData: res });
      res.map(book => {
        this.setState(prevState => ({
          BooksShelfs: [...prevState.BooksShelfs, book.shelf]
        }));
      });
    });
  };

  searchQuery = query => {
    BooksAPI.search(query.trim()).then(res =>
      res.error
        ? this.setState({ emptyList: true })
        : this.setState({ searchList: res, emptyList: false })
    );
  };

  componentDidMount() {
    const {
      state: { BooksShelfs }
    } = this;

    this.getBooks();
  }

  render() {
    const {
      state: { BooksData, BooksShelfs, searchList, emptyList }
    } = this;

    return (
      <div className="app">
        <Switch>
          <Route path="/search">
            <Search
              emptyList={emptyList}
              searchList={searchList}
              onSearch={this.searchQuery}
              onShelfSelector={this.changeShelf}
            />
          </Route>
          <Route exact path="/">
            <Home
              onShelfSelector={this.changeShelf}
              BooksData={BooksData}
              BooksShelfs={BooksShelfs}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
