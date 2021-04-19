import React, { Component } from "react";
import kakaoLogin from "../../res/kakao_login_medium_narrow.png";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-gray-50">
        <div className="flex lg:flex-row flex-col p-3">
          <div className="flex flex-auto flex-row justify-center pt-2">
            <svg
              className="fill-current text-gray-700 text-2xl w-6 h-6"
              viewBox="0 0 510 510"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="XMLID_131_">
                <path
                  id="XMLID_133_"
                  d="m310.37 36.901c-9.066-21.65-30.468-36.901-55.37-36.901s-46.304 15.252-55.37 36.901c17.721-4.501 36.269-6.901 55.37-6.901s37.649 2.4 55.37 6.901z"
                />
                <path
                  id="XMLID_135_"
                  d="m199.63 473.099c9.066 21.65 30.468 36.901 55.37 36.901s46.304-15.251 55.37-36.901c-17.721 4.501-36.269 6.901-55.37 6.901s-37.649-2.4-55.37-6.901z"
                />
                <path
                  id="XMLID_274_"
                  d="m473.099 199.63c4.501 17.72 6.901 36.269 6.901 55.37s-2.4 37.649-6.901 55.37c21.65-9.066 36.901-30.468 36.901-55.37s-15.251-46.304-36.901-55.37z"
                />
                <path
                  id="XMLID_297_"
                  d="m0 255c0 24.902 15.251 46.304 36.901 55.37-4.5-17.72-6.901-36.269-6.901-55.37s2.401-37.65 6.901-55.37c-21.65 9.066-36.901 30.468-36.901 55.37z"
                />
                <path
                  id="XMLID_298_"
                  d="m392.886 57.114c-8.006 0-15.772 1.558-22.953 4.529 32.183 19.202 59.19 46.204 78.399 78.382 8.949-21.738 4.614-47.704-13.019-65.338-11.334-11.332-26.401-17.573-42.427-17.573z"
                />
                <path
                  id="XMLID_310_"
                  d="m369.975 448.332c7.318 3.013 15.113 4.526 22.911 4.526 15.364 0 30.729-5.849 42.427-17.545 17.633-17.634 21.968-43.6 13.019-65.338-19.201 32.164-46.193 59.156-78.357 78.357z"
                />
                <path
                  id="XMLID_327_"
                  d="m140.025 61.668c-21.738-8.949-47.704-4.614-65.337 13.02-17.633 17.633-21.968 43.599-13.019 65.337 19.2-32.164 46.192-59.156 78.356-78.357z"
                />
                <circle id="XMLID_328_" cx="255" cy="255" r="90" />
                <path
                  id="XMLID_331_"
                  d="m450 255c0-107.523-87.477-195-195-195s-195 87.477-195 195 87.477 195 195 195 195-87.477 195-195zm-315 0c0-66.169 53.831-120 120-120s120 53.831 120 120c0 66.168-53.832 120-120 120s-120-53.832-120-120z"
                />
              </g>
            </svg>
            <p className="text-2xl font-semibold text-gray-700"> Harmony</p>
          </div>
          <div className="flex-auto flex justify-center pt-3">
            <a className="text-base text-gray-700 pr-4" href="/">
              파트너 찾기
            </a>
            <a className="text-base text-gray-700 pr-4" href="/">
              프로젝트 찾기
            </a>
            <a className="text-base text-gray-700" href="/">
              프로젝트 등록
            </a>
          </div>
          <div className="flex-auto flex justify-center">
            {this.props.USER_LOGIN ? (
              <div><p className="text-sm text-gray-700 pt-3">{this.props.USER_NAME}님 안녕하세요</p></div>
            ):(
              <div><a href="https://kauth.kakao.com/oauth/authorize?client_id=dab58a800514cc429576cf0f84c83ab0&redirect_uri=http://harmony.seongrok.net/kakao/auth&response_type=code"><img src={kakaoLogin} alt="kakao_login" ></img></a></div>
            )}
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}
