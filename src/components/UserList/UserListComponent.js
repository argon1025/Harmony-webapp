import React, { Component } from "react";
import UserCard from "./UserCardComponent";
export default class UserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="min-h-screen bg-gray-50 justify-center">
        <div className="flex flex-row justify-center lg:py-28">
          <p className="text-xl text-gray-700 lg:text-4xl pt-5">프로젝트를 시작하기전 어떤 사람들이 있는지 확인하세요!</p>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap justify-center mr-10 ml-10 lg:mr-28 lg:ml-28">
          <div className="m-5">
            <UserCard name="test" blogLink="test.com" jobTag="1" />
          </div>
          <div className="m-5">
            <UserCard />
          </div>
          <div className="m-5">
            <UserCard />
          </div>
          <div className="m-5">
            <UserCard />
          </div>
          <div className="m-5">
            <UserCard />
          </div>
          <div className="m-5">
            <UserCard />
          </div>
          <div className="m-5">
            <UserCard />
          </div>
          <div className="m-5">
            <UserCard />
          </div>
        </div>
      </div>
    );
  }
}
