import React, { Component } from 'react';
import "./Posts.css";
import config from '../config';
import { load } from '../helpers/spreadsheet';
import { Link } from "react-scroll";

class Posts extends Component {
  render() {
  const { posts, error } = this.state;
  if (error) {
    return <div>{this.state.error}</div>;
  }
  return (
    <div id="work">
    <Link
    activeClass="active"
    to="work"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {270}>
    <a href="#work" className="link"><h1 className="custom-underline">Work</h1></a></Link>
      <div className="projects">
        {posts.map((post, i) => (
          <div className="project" key={i}>
            <div className="project-content">
              <p>{post.date}</p>
              <a href={post.url} target="_blank" className="link"><h1>{post.title}</h1></a>
              <p>{post.type}</p>
            </div>
          </div>
        ))}
      </div>
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
