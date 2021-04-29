import React, { Component } from "react";
import kakaoLogin from "../../res/kakao_login_medium_narrow.png";

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.loginButtonForKakao = this.loginButtonForKakao.bind(this);
    this.logoutButton = this.logoutButton.bind(this);
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
            <a href="/"><p className="text-2xl font-semibold text-gray-700" > Harmony</p></a>
          </div>
          <div className="flex-auto flex justify-center pt-3">
            <a className="text-base text-gray-700 pr-4" href="/userlist">
              파트너 찾기
            </a>
            <a className="text-base text-gray-700 pr-4" href="/projectlist">
              프로젝트 찾기
            </a>
            <a className="text-base text-gray-700" href="/">
              프로젝트 등록
            </a>
          </div>
          <div className="flex-auto flex justify-center">
            {this.props.USER_LOGIN ? (
              <div>
                <div className="flex flex-row flex-nowrap align-middle justify-center">
                <p className="text-sm text-gray-700 pt-3">
                  {this.props.USER_NAME}님 안녕하세요
                </p>
                <button
                  type="button"
                  className="border border-green-300 text-green-300 rounded-md px-4 py-2 ml-3 transition duration-500 ease select-none hover:text-white hover:bg-green-300 hover:border-green-300 focus:outline-none focus:shadow-outline"
                  onClick={this.logoutButton}
                >
                  <div className="flex flex-row flex-nowrap align-middle justify-center">
                    로그아웃
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current text-2xl w-4 h-4 ml-2 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </button>
                </div>
              </div>
            ) : (
              <div>
                <button
                  type="button"
                  className="border border-yellow-400 text-yellow-400 rounded-md px-4 py-2 mr-3 mt-2 lg:mt-0 transition duration-500 ease select-none hover:text-white hover:bg-yellow-400 focus:outline-none focus:shadow-outline"
                  onClick={this.loginButtonForKakao}
                >
                  <div className="flex flex-row flex-nowrap align-middle justify-center">
                    <span>Kakao로 시작하기!</span>
                    <svg
                      id="Bold"
                      className="fill-current text-2xl w-6 h-6 ml-2"
                      enable-background="new 0 0 24 24"
                      height="512"
                      viewBox="0 0 24 24"
                      width="512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m9.462 9.306-.692 1.951h1.383z" />
                      <path d="m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.299 4.45-1.333 4.47-1.113 4.599.276.161.634-.005 5.357-3.311.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399s-5.373-9.399-12-9.399zm-5.942 12.023c0 .362-.311.657-.692.657s-.692-.295-.692-.657v-4.086h-1.08c-.375 0-.679-.302-.679-.673s.303-.674.678-.674h3.545c.375 0 .679.302.679.673s-.305.674-.679.674h-1.08zm5.378.648c-.72 0-.587-.565-.919-1.195h-2.111c-.329.625-.2 1.195-.919 1.195-.693.001-.815-.421-.604-1.071l1.656-4.33c.117-.33.471-.669.922-.679.452.01.807.349.923.679 1.093 3.39 2.654 5.402 1.052 5.401zm3.939-.092h-2.221c-1.159 0-.454-1.565-.663-5.301 0-.379.317-.688.707-.688s.707.308.707.688v4.04h1.471c.366 0 .663.283.663.63-.001.348-.298.631-.664.631zm5.419-.518c-.025.181-.122.344-.269.454-.955.721-1.661-1.381-2.593-2.271l-.24.239v1.5c0 .38-.31.688-.693.688-.382 0-.692-.308-.692-.688v-4.705c0-.379.31-.688.692-.688s.692.308.692.688v1.478c1.277-.958 1.985-2.67 2.792-1.869.792.786-.848 1.474-1.527 2.422 1.604 2.212 1.909 2.267 1.838 2.752z" />
                    </svg>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
        <hr></hr>
      </div>
    );
  }
}