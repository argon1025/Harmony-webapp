import React, { Component } from "react";

export default class ProjectCreate extends Component {
    constructor(props) {
    super(props);
  }
 /*
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
  */

  render() {
    return (
      <div className="min-h-screen bg-gray-50 justify-center">
          Project create
      </div>
    );
  }
}