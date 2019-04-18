import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import ApiConf from "./config";
import RepoSearch from "./RepoSearch";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    authorization: `Bearer ${ApiConf.bearerToken}`
  }
});

class App extends Component {
  public render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <RepoSearch client={client} />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
