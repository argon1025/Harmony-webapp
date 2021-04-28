import React, { Component } from "react";
import UserCard from "./UserCardComponent";
import UserCardSkeleton from "./UserCardSkeletonComponent";
import * as RESTAPI from "../../service/userList";

export default class UserList extends Component {
  state = {
    pageLoading: true,
    userListData: {},
  };
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    // 유저 리스트 데이터 로드
    while (true) {
      try {
        // REST API
        let result = await RESTAPI.getUserList();

        // 스켈레톤 뷰를 무조건 1초이상 표시하게 한다
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });

        // 상태를 변경한다
        this.setState({ pageLoading: false, userListData: result });

        // while 문을 종료한다
        break;

      } catch (error) {
        // 구문 실행에 실패 했을 경우
        console.log("getUserList Failed, try again");

        // 1초뒤에 같은 구문을 다시 시작한다
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
      }
    }
  }

  render() {
    // 유저 리스트 작성
    let listView

    // 유저 리스트가 componentDidMount에서 성공적으로 로드 되었을경우 시작
    if (Object.keys(this.state.userListData).length > 0) {
      listView = this.state.userListData.map((userData)=>{
        console.log(userData);
        return (<div className="m-5">
        <UserCard name={userData.name} blogLink={userData.blogLink} jobTag={userData.jobTag} profileImage={userData.profileImageUrl} />
      </div>);
      });
    }
    return (
      <div className="min-h-screen bg-gray-50 justify-center">
        <div className="flex flex-row justify-center lg:py-28">
          <p className="text-xl text-gray-700 lg:text-4xl pt-5">
            프로젝트를 시작하기전 어떤 사람들이 있는지 확인하세요!
          </p>
        </div>
        {/* 페이지 로딩 */}
        {this.state.pageLoading ? (
          <div className="flex flex-col lg:flex-row flex-wrap justify-center mr-10 ml-10 lg:mr-28 lg:ml-28">
            {/* Skeleton */}
            <div className="m-5">
              <UserCardSkeleton />
            </div>
            <div className="m-5">
              <UserCardSkeleton />
            </div>
            <div className="m-5">
              <UserCardSkeleton />
            </div>
            <div className="m-5">
              <UserCardSkeleton />
            </div>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row flex-wrap justify-center mr-10 ml-10 lg:mr-28 lg:ml-28">
            {/* Nomal */}
            {listView}
          </div>
        )}
      </div>
    );
  }
}
