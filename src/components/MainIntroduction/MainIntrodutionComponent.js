import React, { Component } from "react";
import img from "../../res/MainIntroIMG.png";
import spaceImg from "../../res/spaceShip.png"
export default class MainIntroductionCompoment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="motion-safe:animate-fadeIn min-h-screen pattern">
        
<div class="m-auto max-w-6xl p-12">
   <div class="flex flex-col md:flex-row">
      <div class="md:w-1/2 max-w-md flex flex-col justify-center">
         <div class="md:text-5xl text-2xl uppercase font-black">마음 맞는 팀원과 함께 프로젝트를 시작하세요</div>
         <div class="text-xl mt-4">시작하기 어려웠던 프로젝트, 참여하기 힘들었던 프로젝트 저희가 도와드립니다</div>
         <div class="my-5 h-16">
         <button
                  type="button"
                  className="border border-yellow-400 text-yellow-400 rounded-md px-4 py-2 mr-3 mt-2 lg:mt-0 transition duration-500 ease select-none hover:text-white hover:bg-yellow-400 focus:outline-none focus:shadow-outline"
                  onClick={this.loginButtonForKakao}
                >
                  <div className="flex flex-row flex-nowrap align-middle justify-center">
                    <span>Join kakaoAccount</span>
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
      </div>
      <div class="flex md:justify-end w-full md:w-1/2 -mt-5">
         <div class="bg-dots">
            <div class="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
            <img src={spaceImg} alt="MainIntroIMG"></img>
               <div class="text-sm p-10 bg-white">나는 똑똑한 것이 아니라 단지 문제를 더 오래 연구할 뿐이다. -Albert Einstein</div>
            </div>
         </div>
      </div>
   </div>
</div>

        <div className="flex flex-row justify-center">
          <p className="text-xl text-gray-700 lg:text-4xl pt-5">좋은 사람들과 함께 프로젝트를 시작하세요!</p>
        </div>
        <div>
          <img src={img} alt="MainIntroIMG"></img>
        </div>
      </div>
    );
  }
}
