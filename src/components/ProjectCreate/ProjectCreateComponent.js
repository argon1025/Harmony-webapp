import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default class ProjectCreate extends Component {
  state = {
    title:"",
    content:"",
  }
  constructor(props) {
    super(props);

    this.contentDataIsChange = this.contentDataIsChange.bind(this);
    this.titleDataIsChange = this.titleDataIsChange.bind(this);
    this.pressProjectCreateButton = this.pressProjectCreateButton.bind(this);
  }
  contentDataIsChange(data){
    this.setState({...this.state,content:data});
    // console.log(this.state);
  }
  titleDataIsChange(event){
    this.setState({...this.state,title:event.target.value});
    // console.log(this.state);
  }
  pressProjectCreateButton(){
    console.log(this.state);
    this.props.createProject(this.state.title,this.state.content);
  }

  render() {
    return (
      <div className="flex min-h-screen bg-gray-50 justify-center">
        <div className="flex flex-col pt-10">
          <div className=" p-5 bg-white shadow-sm sm:rounded-lg w-screen lg:max-w-6xl">
            <div class="mb-4">
              <label class="text-xl text-gray-600">
                프로젝트명 <span class="text-red-500">*</span>
              </label>
              <input
                type="text"
                class="border-2 border-gray-300 p-2 w-full"
                name="title"
                id="title"
                onChange={this.titleDataIsChange}
                required
              ></input>
            </div>
            <CKEditor
              editor={ClassicEditor}
              data="<p>프로젝트 내용</p>"
              config={{
                // 여기에 config 입력
                toolbar: [ 'bold', 'italic', 'link', 'bulletedList']
              }}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
                editor.editing.view.change(writer => {
                  writer.setStyle(
                    "height",
                    "400px",
                    editor.editing.view.document.getRoot()
                  );
                });
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                this.contentDataIsChange(data);
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
                  onClick={this.pressProjectCreateButton}
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
