import React, { Component } from 'react';
import './App.css';
import Post from './post/Post'
import Navbar from './navbar/Navbar'
import { generateFakePost } from './utils'

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
      <div className='Container'>
        <Navbar />
        <div className='Posts'>
          {this.state.posts.map((post, i) => <Post key={i} data={post} />)}
        </div>
      </div>
    );
  }
}

export default App;
