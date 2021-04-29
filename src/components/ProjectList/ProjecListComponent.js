import React, { Component } from "react";
import ProjectCard from "./ProjectCardComponent";
import ProjectCardSkeleton from "./ProjectCardSkeletonComponent";

export default class ProjectList extends Component {
    state = {
        pageLoading: true
      };
    constructor(props) {
    super(props);

    this.loginButtonForKakao = this.loginButtonForKakao.bind(this);
    this.logoutButton = this.logoutButton.bind(this);
  }
  async componentDidMount(){
      // 스켈레톤 뷰를 무조건 3초이상 표시하게 한다
      await new Promise((resolve) => {
        setTimeout(resolve, 3000);
      });

      // 상태를 변경한다
      this.setState({ pageLoading: false});
  }
  loginButtonForKakao() {
    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?client_id=dab58a800514cc429576cf0f84c83ab0&redirect_uri=http://harmony.seongrok.net/kakao/auth&response_type=code";
  }
  logoutButton(){
    this.props.logout()
  }

  render() {
    return (
      <div className="min-h-screen bg-gray-50 justify-center">
          {this.state.pageLoading ? (
          <div>
            {/* Skeleton */}
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
            <ProjectCardSkeleton />
          </div>
        ) : (
          <div>
            {/* Nomal */}
            <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          </div>
        )}
      </div>
    );
  }
}