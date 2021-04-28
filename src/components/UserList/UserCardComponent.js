import React, { Component } from "react";

export default class UserCard extends Component {
  state = {
    name:"",
    blogLink:"",
    jobTag:"",
    profileImage:""
  }
  constructor(props) {
    super(props);

    // 상태 설정
    this.state.name = this.props.name || "User";
    this.state.blogLink = this.props.blogLink || "http://harmony.seongrok.net";
    this.state.jobTag = this.props.jobTag || "1";
    this.state.profileImage = this.props.profileImage || "http://k.kakaocdn.net/dn/5b4p3/btqXfJNCwln/xkWdK3xaopQHiqj3kG3DZ0/img_640x640.jpg";

  }

  render() {
    return (
      <div className="w-full lg:w-72 h-56">
        <div class="relative bg-white rounded-3xl py-6 px-6 my-4 shadow-xl">
          <div class=" text-white flex items-center absolute rounded-full shadow-xl bg-gray-200 h-16 w-16 left-4 -top-6 overflow-hidden">
            <img
              src={this.state.profileImage}
              alt="UserImage"
            ></img>
          </div>
          <div class="mt-8">
            <p class="text-xl font-semibold my-2">{this.state.name}</p>
            <div class="flex space-x-2 text-gray-400 text-sm my-3">
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                    clip-rule="evenodd"
                  />
                </svg>
              <p className="truncate">{this.state.blogLink}</p>
            </div>
            <div class="border-t-2"></div>

            <div class="flex justify-between">
              <div class="my-2">
                <p class="font-semibold text-base mb-2">전문분야</p>
                <td class="text-center">
                <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                  BackEnd
                </span>
              </td>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
