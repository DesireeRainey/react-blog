import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//component route imports
import Home from './Home.js';
import Blog from './Blog.js';
import Contact from './Contact.js';
import Favorites from './Favorites.js';
import Pets from './Pets.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Link to="/">Home</Link>{' '}
        <Link to="/blog">Blog</Link>{' '}
        <Link to="/contact">Contact</Link>{' '}
        <Link to="/favorites">Favorites</Link>{' '}
        <Link to="/pets">Pets</Link>{' '}

        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/contact" component={Contact} />
        <Route path="/pets" component={Pets} />
      </div>
      </Router>
    );
  }
}

export default App;
