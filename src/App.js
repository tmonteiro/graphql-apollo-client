import React from 'react';
import './App.css';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const query = gql`
  {
    user(login: "tmonteiro") {
      name
      email
      avatarUrl
    }
  }
`;

function App() {
  return (
    <div className="App">
      <Query query={query}>
        {result => {
          if (result.loading) return <p>loading...</p>;
          if (result.error) return <p>{result.error.message}</p>;
          return (
            <div>
              <h1>{result.data.user.name}</h1>
              <p>{result.data.user.email}</p>
              <img
                src={result.data.user.avatarUrl}
                alt={`${result.data.user.name}'s profile avatar`}
              />
            </div>
          );
        }}
      </Query>
    </div>
  );
}

export default App;
