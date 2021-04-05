import React, { Component } from "react";

const queryString = require("query-string");

export default class ServiceInformaion extends Component {
  state = {
    parsed: {},
  };
  constructor(props) {
    super(props);

    this.state.parsed = queryString.parse(window.location.search);
    console.log(this.state.parsed);

    this.clickPingButton = this.clickPingButton.bind(this);
  }

  clickGoToIndexButton(){
    window.location.pathname = "/"
  }

  clickPingButton(){
    this.props.ping("pong!");
  }

  render() {
    return (
      <div class="m-6">
        <h1 class="text-4xl">service Info</h1>
        <h2 class="text-xl">service version : {this.props.version}</h2>
        <button class="bg-red-500 hover:bg-red-700 rounded-lg p-1 m-1 text-white" onClick={this.clickGoToIndexButton}>go to index</button>
        <button class="bg-red-500 hover:bg-red-700 rounded-lg p-1 m-1 text-white" onClick={this.clickPingButton}>ping!</button>
        <p>{this.props.testvalue}</p>
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </div>
    );
  }
}
