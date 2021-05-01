import React, { Component } from "react";

export default class ProjectCard extends Component {
  state = {
    projectID: "",
    managerID: "",
    title: "",
    content: "",
    date: "",
    delete: "",
    stateID: "",
  };
  constructor(props) {
    super(props);

    // 상태 설정
    this.state.projectID = this.props.projectID || "0";
    this.state.managerID = this.props.managerID || "0";
    this.state.title = this.props.title || "테스트 프로젝트";
    this.state.content = this.props.content || "테스트 프로젝트 입니다.";
    this.state.date = this.props.date || "2021.05.01";
    this.state.delete = this.props.delete || false;
    this.state.stateID = this.props.stateID || "1";
  }

  render() {
    return (
      <div className="flex flex-col lg:flex-row flex-wrap justify-center mr-10 ml-10 lg:mr-60 lg:ml-60">
        <div class="w-full h-64 px-10 my-4 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
            <span class="font-light text-gray-600">{this.state.date}</span>
            <a
              class="px-2 py-1 bg-green-300 text-gray-100 font-bold rounded text-sm"
              href="/"
            >
              진행중
            </a>
          </div>
          <div class="mt-2">
            <a
              class="text-2xl text-gray-700 font-bold hover:text-gray-600"
              href="/"
            >
              {this.state.title}
            </a>
            <div className="inline-block w-full h-20 overflow-clip overflow-hidden">
              <p class="inline-block mt-2 text-gray-600">
                {this.state.content}
              </p>
            </div>
          </div>
          <div class="flex justify-between items-center mt-4">
            <a class="text-blue-600 hover:underline" href="/">
              자세히
            </a>
            <div>
              <a class="flex items-center" href="/">
                {/*
                <img
                  class="mx-4 w-10 h-10 object-cover rounded-full sm:block"
                  src="http://k.kakaocdn.net/dn/5b4p3/btqXfJNCwln/xkWdK3xaopQHiqj3kG3DZ0/img_640x640.jpg"
                  alt="avatar"
                ></img>
                <h1 class="text-gray-700 font-bold">성록</h1>
                */}
                <h1 class="text-gray-700 font-bold">일반 프로젝트</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
