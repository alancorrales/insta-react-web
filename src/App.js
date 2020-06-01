import React, { Component } from 'react';
import './App.css';
import Post from './post/Post'

class App extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    const posts = [];

    for (let i = 0; i < 1; i++) {
      posts.push({
        i
      })
    }

    this.setState({ posts });
  }

  render() {
    return (
      <div>
        {this.state.posts.map(post => <Post data={post} />)}
      </div>
    );
  }
}

export default App;
