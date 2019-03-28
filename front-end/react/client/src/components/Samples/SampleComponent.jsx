import React, { Component } from 'react';
import './Sample.css';


class Sample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }
  
    render() {
      return (
        <button className="sample" onClick={() => alert('click')}>
          {this.props.value}
        </button>
      );
    }
}