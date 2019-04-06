import React from "react";
import { connect } from "react-redux";
import { sampleAction } from "../../redux/actions";

class SampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  someFunc = param => {
    this.setState({  });
  };

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

const mapStateToProps = state => { // GET DATA FROM state
    return {  };
};
const mapDispatchToProps = { sampleAction };

export default connect(mapStateToProps, mapDispatchToProps)(SampleComponent);
