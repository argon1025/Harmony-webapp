import React, { Component } from "react";

export default class UserCardSkeleton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="w-full lg:w-72 h-56 animate-pulse">
        <div class="relative bg-white rounded-3xl py-6 px-6 my-4 shadow-xl">
            {/* Profile Img */}
          <div class=" text-white flex items-center absolute rounded-full shadow-xl left-4 -top-6 overflow-hidden h-16 w-16 bg-gray-200">
          </div>
          <div class="mt-8">
              {/* User Name */}
          <div class="h-6 bg-gray-200 rounded w-3/4"></div>
            <div class="flex space-x-2 text-gray-400 text-sm my-3">
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
                {/* Blog Link */}
                <div class="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
            <div class="border-t-2"></div>

            <div class="flex justify-between">
              <div class="my-2">
                <div class="h-6 bg-gray-200 rounded w-14 my-2"></div>
                <div class="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
