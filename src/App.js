import React, { Component } from 'react';

import './App.css';

import { generateFakePost } from './App.utils';

import Navbar from './components/navbar/navbar.component';
import Post from './components/posts/posts.component';

const NUMBER_OF_POSTS = 10;

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    const posts = [];

    for (let i = 0; i < NUMBER_OF_POSTS; i++) {
      posts.push(generateFakePost(i))
    }

    this.setState({ posts });
  }

  render() {
    return (
      <div className='container'>
        <Navbar />
        <div className='posts'>
          {this.state.posts.map((post, i) => <Post key={i} data={post} />)}
        </div>
      </div>
    );
  }
}

export default App;
