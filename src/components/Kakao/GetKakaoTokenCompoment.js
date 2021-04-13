import React, { Component } from "react";

const queryString = require("query-string");

export default class MainIntroductionCompoment extends Component {
    state = {
        parsed: {},
      };
  constructor(props) {
    super(props);

    this.state.parsed = queryString.parse(window.location.search);
    console.log(this.state.parsed);
  }

  render() {
    return (
      <div classname="">
          Login...
      </div>
    );
  }
}
