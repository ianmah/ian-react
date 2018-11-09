import React, { Component } from 'react';
import "./SocialMedia.css";
import Link from "./Link";

class SocialMedia extends Component {

  render() {

      let links;

      if(this.props.links){
        links = this.props.links.map(link => {
          return (
            <Link link={link} />
          )
        })
      }

    return (
      <div className="Icons">
        {links}
      </div>
    );
  }
}


export default SocialMedia;
