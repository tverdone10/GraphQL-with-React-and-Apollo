import React from "react";
import "./App.css";
import logo from "./logo.png";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches'
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <img
          src={logo}
          alt="Chungus"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
        SPACEX
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
