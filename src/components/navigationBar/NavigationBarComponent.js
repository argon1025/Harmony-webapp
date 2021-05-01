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
  logoutButton() {
    this.props.logout();
  }

  render() {
    return (
      <div className="bg-gray-50">
        <div className="flex lg:flex-row flex-col p-3">
          <div className="flex flex-auto flex-row justify-center pt-2">
            <a href="/">
              <svg
                className="fill-current text-gray-700 text-2xl w-7 h-7"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 454 454"
              >
                <g>
                  <path
                    d="M0,0v454h454V0H0z M331.204,345.802H266.4v-86.399h-78.801v86.399h-64.803V108.198h64.803v86.4H266.4v-86.4h64.804V345.802
		L331.204,345.802z"
                  />
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </a>
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
