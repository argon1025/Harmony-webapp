import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
      <div className="flex min-h-screen bg-gray-50 justify-center">
        <div className="flex flex-col pt-10">
          <div className=" p-5 bg-white shadow-sm sm:rounded-lg lg:max-w-6xl">
            <div class="mb-4">
              <label class="text-xl text-gray-600">
                Title <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                class="border-2 border-gray-300 p-2 w-full"
                name="title"
                id="title"
                required
              ></input>
            </div>
            <CKEditor
              editor={ClassicEditor}
              data="<p>프로젝트 내용을 입력해 주세요!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
            <div>
                <button
                  type="button"
                  className="border border-green-300 text-green-300 rounded-md px-4 py-2 mt-3 transition duration-500 ease select-none hover:text-white hover:bg-green-300 hover:border-green-300 focus:outline-none focus:shadow-outline"
                  onClick={this.loginButtonForKakao}
                >
                  <div className="flex flex-row flex-nowrap align-middle justify-center">
                    <span>프로젝트 생성</span>
                    
                  </div>
                </button>
              </div>
          </div>
          
        </div>
      </div>
    );
  }
}
