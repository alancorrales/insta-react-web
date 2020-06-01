import React, { Component } from 'react';
import './App.css';
import Post from './post/Post'
import { generateFakePost } from './utils'

const NUMBER_OF_POSTS = 3;

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    const posts = [];

    for (let i = 0; i < NUMBER_OF_POSTS; i++) {
      posts.push(generateFakePost())
    }

    this.setState({ posts });
  }

  render() {
    return (
      <div className='container'>
        {this.state.posts.map((post, i) => <Post key={i} data={post} />)}
      </div>
    );
  }
}

export default App;
