import React, { Component } from "react";

export default class FooterBarCompoment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="flex flex-col justify-center lg:flex-row h-20 bg-gray-100 mb-1 pt-5">
        <div class="flex justify-center">
          <p class="text-gray-700 text-4xl font-bold mr-5">Harmony</p>
        </div>
        <div class="flex flex-col">
          <p class="text-xs text-gray-300 lg:text-left text-center">ⓒ 2021. SeongrokLEE All Rights Reserved</p>
          <p class="text-xs text-gray-300 lg:text-left text-center">Icons made by Freepik from www.flaticon.com</p>
          <p class="text-xs text-gray-300 lg:text-left text-center">School vector created by pch.vector - www.freepik.com</p>
        </div>
      </div>
    );
  }
}
