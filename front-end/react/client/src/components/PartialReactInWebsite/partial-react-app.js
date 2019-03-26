'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const e = React.createElement;

class PartialApp extends React.Component { // OR YOU CAN JUST USE Component
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    render() {
        if (this.state.liked) return 'You liked this.';
        return (
            <button onClick={() => this.setState({ liked: true })}>Like</button>
        );
        // OR, RETURN AN HTML ELEMENT WITH e()
        // return e('button', { onClick: () => this.setState({ liked: true }) }, 'Like' );
    }
}

//  EITHER OF THESE 2 WILL SURELY WORK
ReactDOM.render(e(PartialApp), document.querySelector('#partial_root'));
// ReactDOM.render(<PartialApp />, document.getElementById('partial_root'));
