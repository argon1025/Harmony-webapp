import React, { Component } from "react";
import img from "../../res/MainIntroIMG.png";

export default class MainIntroductionCompoment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="motion-safe:animate-fadeIn min-h-screen pattern">
        <div class="flex flex-row justify-center">
          <p class="text-xl text-gray-700 lg:text-4xl pt-5">좋은 사람들과 함께 프로젝트를 시작하세요!</p>
        </div>
        <div>
          <img src={img} alt="MainIntroIMG"></img>
        </div>
      </div>
    );
  }
}
