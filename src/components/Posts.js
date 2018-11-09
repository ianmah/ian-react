import React, { Component } from 'react';
import "./Posts.css";
import config from '../config';
import { load } from '../helpers/spreadsheet';

class Posts extends Component {
  render() {
  const { posts, error } = this.state;
  if (error) {
    return <div>{this.state.error}</div>;
  }
  return (
    <div>
    <h1>Work</h1>
      {posts.map((post, i) => (
        <div className="project" key={i}>
          {post.year}
          <h1>{post.make}</h1>
          <p>{post.model}</p>
        </div>
      ))}
      </div>
  );
}


  componentDidMount() {
    // 1. Load the JavaScript client library.
    window.gapi.load("client", this.initClient);
  }

  initClient = () => {
    // 2. Initialize the JavaScript client library.
    window.gapi.client
      .init({
        apiKey: config.apiKey,
        // Your API key will be automatically added to the Discovery Document URLs.
        discoveryDocs: config.discoveryDocs
      })
      .then(() => {
      // 3. Initialize and make the API request.
      load(this.onLoad);
    });
  }


  onLoad = (data, error) => {
      if (data) {
        const posts = data.posts;
        this.setState({ posts });
      } else {
        this.setState({ error });
      }
    };

    state = {
      posts: [],
      error: null
    }
}


export default Posts;
