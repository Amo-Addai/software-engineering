import React from "react";
import { connect } from "react-redux";
import { sampleAction } from "../../redux/actions";

const SampleFunctionalComponent = ({ params }) => ( // RETURN .jsx CODE
  <li>
  </li>
);

const mapStateToProps = state => { // GET DATA FROM state
    return {  };
};
const mapDispatchToProps = { sampleAction };

export default connect(mapStateToProps, mapDispatchToProps)(SampleFunctionalComponent);
