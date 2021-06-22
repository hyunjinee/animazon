import logo from './logo.svg';
import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import Nav from './components/Nav/Nav';

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache()
})


function App() {
  return (
    <div className="App">
      <ApolloProvider client={client} >
        <BrowserRouter>
          <Nav/>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
