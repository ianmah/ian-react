import React, { Component } from 'react';
import "./SocialMedia.css";
import config from '../config';
import { load } from '../helpers/spreadsheet2';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

class Posts extends Component {
  render() {

    library.add(fab, faEnvelope, faFileAlt)
  const { posts, error } = this.state;
  if (error) {
    return <div>{this.state.error}</div>;
  }

  let links = posts.map((post, i) => (
    <a href={post.url} target="_blank" key={i} className="Icon"><FontAwesomeIcon className="Icon" size="lg" icon={this.icon(post)} /></a>
  ))

  return (
    <div className="Icons">
      {links}
    </div>
  );
  }

  icon = (post) => {
    let icon;
    if (post.type === "brands"){
      icon = ['fab', post.icon];
    } else {
      icon = post.icon;
    }
    console.log(post);
    return icon;
  };

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
