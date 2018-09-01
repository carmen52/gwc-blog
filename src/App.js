import React, { Component, ReactComponent } from 'react';
import './App.css';
import './common/header.css';
import {Header, Footer} from './common/header.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="blog-header" >
        Blog Posts 
        </div>
        <div className="no-posts">
        Check back soon!
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
