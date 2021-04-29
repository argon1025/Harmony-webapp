import React, { Component } from "react";

export default class ProjectCardSkeleton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col lg:flex-row flex-wrap justify-center mr-10 ml-10 lg:mr-60 lg:ml-60 animate-pulse">
        <div class="w-full h-64 px-10 my-4 py-6 bg-white rounded-lg shadow-md">
          <div class="flex justify-between items-center">
              {/* date */}
          <div class="h-4 bg-gray-200 rounded w-1/4"></div>
            <a class="px-2 py-1 bg-gray-200 text-gray-100 font-bold rounded text-sm" href="/"> 진행중 </a>
          </div>
          <div class="mt-2">
            <a
              class="text-2xl text-gray-700 font-bold hover:text-gray-600"
              href="/"
            >
                {/* title */}
              <div class="h-4 bg-gray-200 rounded w-2/4"></div>
            </a>
            <div className="inline-block w-full h-20 overflow-clip overflow-hidden">
            <div class="mt-2 h-4 bg-gray-200 rounded w-1/4"></div>
            <div class="mt-2 h-4 bg-gray-200 rounded w-3/4"></div>
            <div class="mt-2 h-4 bg-gray-200 rounded w-2/4"></div>
            </div>
          </div>
          <div class="flex justify-between items-center mt-4">
            {/* title */}
            <div class="h-4 bg-gray-200 rounded w-1/4"></div>
            <div>
              <a class="flex items-center" href="/">
                <div class=" mx-4 w-10 h-10 object-cover rounded-full bg-gray-200">
          </div>
          <div class="h-4 bg-gray-200 rounded w-10"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
