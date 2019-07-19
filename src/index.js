import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: operation => {
    operation.setContext({
      headers: {
        authorization: 'Bearer 72ce75154a31d21f2e942a9cf38627be5f261fbd'
      }
    });
  }
});

client
  .query({
    query: gql`
      query {
        viewer {
          name
          email
          avatarUrl
        }
      }
    `
  })
  .then(res => console.log(JSON.stringify(res, null, 2)));

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
