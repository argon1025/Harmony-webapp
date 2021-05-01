import React, { Component } from "react";
import ProjectCard from "./ProjectCardComponent";
import ProjectCardSkeleton from "./ProjectCardSkeletonComponent";
import * as RESTAPI from "../../service/projectList";

export default class ProjectList extends Component {
    state = {
        pageLoading: true,
        projectListData:{},
      };
    constructor(props) {
    super(props);

    this.loginButtonForKakao = this.loginButtonForKakao.bind(this);
    this.logoutButton = this.logoutButton.bind(this);
  }

  async componentDidMount(){
    // 프로젝트 리스트 데이터 로드
    while(true){
      try{
        // 프로젝트 리스트를 요청한다
        let result = await RESTAPI.getProjectList();
  
        // 스켈레톤 뷰를 무조건 1초이상 표시하게 한다
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });

        // 상태를 변경한다
        this.setState({ pageLoading: false, projectListData: result });

        //while 문을 종료한다
        break;
      }
      catch(error){
        // 구문 실행에 실패 했을 경우
        console.log("getProjectList Failed, try again");

        // 1초 뒤에 같은 구문을 다시 시작한다
        await new Promise((resolve) => {
          setTimeout(resolve, 1000);
        });
      }
    }
  }

  loginButtonForKakao() {
    window.location.href =
      "https://kauth.kakao.com/oauth/authorize?client_id=dab58a800514cc429576cf0f84c83ab0&redirect_uri=http://harmony.seongrok.net/kakao/auth&response_type=code";
  }

  logoutButton(){
    this.props.logout()
  }

  render() {
    // 프로젝트 리스트 작성
    let listView;

    //프로젝트 리스트가 componentDidMount에서 성공적으로 로드 되었을 경우 시작
    if(Object.keys(this.state.projectListData).length > 0){
      listView = this.state.projectListData.map((projectData)=>{
        return(
          <ProjectCard projectID={projectData.id} managerID={projectData.managerID} title={projectData.title} content={projectData.content} date={projectData.date} delete={projectData.delete} stateID={projectData.stateID} />);
      });
    }else{
      listView = (<div>
        <p className="text-sm text-gray-700 lg:text-4xl pt-5">
            등록된 프로젝트가 없습니다.
          </p>
      </div>);
    }

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
          {listView}
          </div>
        )}
      </div>
    );
  }
}