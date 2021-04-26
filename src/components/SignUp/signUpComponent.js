import React, { Component } from "react";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex bg-gray-50 min-h-screen justify-center">
        <div className="flex flex-col w-screen border-gray-600 m-6 lg:w-96">
          {/* 타이틀 텍스트 */}
          <h1 className="text-3xl font-semibold text-gray-600">SignUp</h1>
          {/* 블로그 링크 입력 */}
          <h2 className="mt-6 text-gray-600 text-base font-semibold">
            GitPage 또는 포트폴리오 사이트 링크
          </h2>
          <div className="relative mt-3">
            <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
              <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
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
              </div>
            </div>
            <input
              name="blogUrl"
              type="text"
              placeholder="http://harmony.github.io"
              className="text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
            />
          </div>

          {/* 직업선택 Radio Button */}
          <h2 className="mt-3 text-gray-600 text-base font-semibold">
            희망 분야
          </h2>
          <div className="flex flex-row">
            <label class="inline-flex items-center">
              <input
                type="radio"
                name="jobs"
                class="form-checkbox text-green-500"
              />
              <td class="px-2 text-center">
                <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                  BackEnd
                </span>
              </td>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                name="jobs"
                class="form-checkbox text-green-500"
              />
              <td class="px-2 text-center">
                <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                  FrontEnd
                </span>
              </td>
            </label>
            <label class="inline-flex items-center">
              <input
                type="radio"
                name="jobs"
                class="form-checkbox text-green-500"
              />
              <td class="px-2 text-center">
                <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
                  Design
                </span>
              </td>
            </label>
          </div>
          {/* SignUp Button */}
          <div class="mt-6">
            <button type="button" class="w-full focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg">
              SignUp
            </button>
          </div>
        </div>
      </div>
    );
  }
}
