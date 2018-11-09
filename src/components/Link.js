import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

class Link extends Component {

  render() {

    library.add(fab, faEnvelope)

    let icon;
    if (this.props.link.library === "brands"){
      icon = ['fab', this.props.link.icon];
    } else {
      icon = this.props.link.icon;
    }

    console.log(this.props);
    return(
      <a href={this.props.link.url}><FontAwesomeIcon className="Icon" size="lg" icon={icon} /></a>
    )
  }
}


export default Link;
