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
    this.clickOpenErrorModalButton = this.clickOpenErrorModalButton.bind(this);
  }

  clickGoToIndexButton(){
    window.location.pathname = "/"
  }

  clickPingButton(){
    this.props.ping("pong!");
  }

  clickOpenErrorModalButton(){
    this.props.openErrorModal("응딩이! 테스트 테스트 테스트");
  }

  render() {
    return (
      <div className="m-6">
        <h1 className="text-4xl">service Info</h1>
        <h2 className="text-xl">service version : {this.props.APP_VERSION}</h2>
        <button className="bg-red-500 hover:bg-red-700 rounded-lg p-1 m-1 text-white" onClick={this.clickGoToIndexButton}>go to index</button>
        <button className="bg-red-500 hover:bg-red-700 rounded-lg p-1 m-1 text-white" onClick={this.clickPingButton}>ping!</button>
        <button className="bg-red-500 hover:bg-red-700 rounded-lg p-1 m-1 text-white" onClick={this.clickOpenErrorModalButton}>openErrorModal</button>
        <p>{this.props.TEST_VALUE}</p>
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <a href='https://www.freepik.com/vectors/school'>School vector created by pch.vector - www.freepik.com</a>
      </div>
    );
  }
}
