(this["webpackJsonpharmony-webapp"]=this["webpackJsonpharmony-webapp"]||[]).push([[0],{76:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(23),a=c.n(r),l=c(17),i=c(40),o=c(15),d={APP_VERSION:"0.1",TEST_VALUE:0,ACCESS_TOKEN:"",REFRESH_TOKEN:"",USER_LOGIN:!1,USER_ID:"",USER_JOBTAG:"",USER_NAME:"",USER_PROFILE:"",USER_LOGIN_TYPE:"",ERROR_STATE:!1,ERROR_MSG:"",ERROR_TARGET_PATH:""},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(console.log(e),console.log(t),t.type){case"ServiceInformaion/SET_TEXT":return Object(o.a)(Object(o.a)({},e),{},{TEST_VALUE:t.size});case"Service/ERROR_MODAL_OPEN":return Object(o.a)(Object(o.a)({},e),{},{ERROR_MSG:t.size.msg,ERROR_STATE:!0,ERROR_TARGET_PATH:t.size.path});case"Service/ERROR_MODAL_CLOSE":return Object(o.a)(Object(o.a)({},e),{},{ERROR_MSG:"",ERROR_STATE:!1});case"Service/SET_TOKEN_INFO":return Object(o.a)(Object(o.a)({},e),{},{ACCESS_TOKEN:t.size.accessToken,REFRESH_TOKEN:t.size.refreshToken});case"Service/SET_USER_INFO":return Object(o.a)(Object(o.a)({},e),{},{USER_LOGIN:!0,USER_ID:t.size.USER_ID,USER_JOBTAG:t.size.USER_JOBTAG,USER_NAME:t.size.USER_NAME,USER_PROFILE:t.size.USER_PROFILE,USER_LOGIN_TYPE:"kakao"});case"Service/LOGOUT":return Object(o.a)(Object(o.a)({},e),{},{ACCESS_TOKEN:"",REFRESH_TOKEN:"",USER_LOGIN:!1,USER_ID:"",USER_JOBTAG:"",USER_NAME:"",USER_PROFILE:"",USER_LOGIN_TYPE:""});default:return e}},x=c(25),u=c(42),b={key:"root",storage:c.n(u).a},h=Object(x.a)(b,j),O=Object(l.d)(h,Object(l.a)(i.a)),p=c(8);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=c(43),m=c(44),g=c(7),v=c(2),w=c(3),y=c(12),k=c(5),E=c(4),_=c(0),R=c(31),N=function(e){Object(k.a)(c,e);var t=Object(E.a)(c);function c(e){var s;return Object(v.a)(this,c),(s=t.call(this,e)).state={parsed:{}},s.state.parsed=R.parse(window.location.search),console.log(s.state.parsed),s.clickSetTestValueButton=s.clickSetTestValueButton.bind(Object(y.a)(s)),s.clickOpenErrorModalButton=s.clickOpenErrorModalButton.bind(Object(y.a)(s)),s}return Object(w.a)(c,[{key:"clickGoToIndexButton",value:function(){window.location.pathname="/"}},{key:"clickSetTestValueButton",value:function(){this.props.setTestValue("pong!")}},{key:"clickOpenErrorModalButton",value:function(){this.props.openErrorModal("\ud14c\uc2a4\ud2b8 \ud14c\uc2a4\ud2b8 \ud14c\uc2a4\ud2b8")}},{key:"render",value:function(){return Object(_.jsxs)("div",{className:"m-6",children:[Object(_.jsx)("h1",{className:"text-4xl",children:"service Info"}),Object(_.jsxs)("h2",{className:"text-xl",children:["service version : ",this.props.APP_VERSION]}),Object(_.jsx)("button",{className:"bg-red-500 hover:bg-red-700 rounded-lg p-1 m-1 text-white",onClick:this.clickGoToIndexButton,children:"go to index"}),Object(_.jsx)("button",{className:"bg-red-500 hover:bg-red-700 rounded-lg p-1 m-1 text-white",onClick:this.clickSetTestValueButton,children:"ping!"}),Object(_.jsx)("button",{className:"bg-red-500 hover:bg-red-700 rounded-lg p-1 m-1 text-white",onClick:this.clickOpenErrorModalButton,children:"openErrorModal"}),Object(_.jsx)("p",{children:this.props.TEST_VALUE}),Object(_.jsxs)("div",{children:["Icons made by ",Object(_.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," from ",Object(_.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(_.jsx)("a",{href:"https://www.freepik.com/vectors/school",children:"School vector created by pch.vector - www.freepik.com"})]})}}]),c}(s.Component),S=function(e){Object(k.a)(c,e);var t=Object(E.a)(c);function c(e){var s;return Object(v.a)(this,c),(s=t.call(this,e)).loginButtonForKakao=s.loginButtonForKakao.bind(Object(y.a)(s)),s.logoutButton=s.logoutButton.bind(Object(y.a)(s)),s}return Object(w.a)(c,[{key:"loginButtonForKakao",value:function(){window.location.href="https://kauth.kakao.com/oauth/authorize?client_id=dab58a800514cc429576cf0f84c83ab0&redirect_uri=http://harmony.seongrok.net/kakao/auth&response_type=code"}},{key:"logoutButton",value:function(){this.props.logout()}},{key:"render",value:function(){return Object(_.jsxs)("div",{className:"bg-gray-50",children:[Object(_.jsxs)("div",{className:"flex lg:flex-row flex-col p-3",children:[Object(_.jsxs)("div",{className:"flex flex-auto flex-row justify-center pt-2",children:[Object(_.jsx)("svg",{className:"fill-current text-gray-700 text-2xl w-6 h-6",viewBox:"0 0 510 510",xmlns:"http://www.w3.org/2000/svg",children:Object(_.jsxs)("g",{id:"XMLID_131_",children:[Object(_.jsx)("path",{id:"XMLID_133_",d:"m310.37 36.901c-9.066-21.65-30.468-36.901-55.37-36.901s-46.304 15.252-55.37 36.901c17.721-4.501 36.269-6.901 55.37-6.901s37.649 2.4 55.37 6.901z"}),Object(_.jsx)("path",{id:"XMLID_135_",d:"m199.63 473.099c9.066 21.65 30.468 36.901 55.37 36.901s46.304-15.251 55.37-36.901c-17.721 4.501-36.269 6.901-55.37 6.901s-37.649-2.4-55.37-6.901z"}),Object(_.jsx)("path",{id:"XMLID_274_",d:"m473.099 199.63c4.501 17.72 6.901 36.269 6.901 55.37s-2.4 37.649-6.901 55.37c21.65-9.066 36.901-30.468 36.901-55.37s-15.251-46.304-36.901-55.37z"}),Object(_.jsx)("path",{id:"XMLID_297_",d:"m0 255c0 24.902 15.251 46.304 36.901 55.37-4.5-17.72-6.901-36.269-6.901-55.37s2.401-37.65 6.901-55.37c-21.65 9.066-36.901 30.468-36.901 55.37z"}),Object(_.jsx)("path",{id:"XMLID_298_",d:"m392.886 57.114c-8.006 0-15.772 1.558-22.953 4.529 32.183 19.202 59.19 46.204 78.399 78.382 8.949-21.738 4.614-47.704-13.019-65.338-11.334-11.332-26.401-17.573-42.427-17.573z"}),Object(_.jsx)("path",{id:"XMLID_310_",d:"m369.975 448.332c7.318 3.013 15.113 4.526 22.911 4.526 15.364 0 30.729-5.849 42.427-17.545 17.633-17.634 21.968-43.6 13.019-65.338-19.201 32.164-46.193 59.156-78.357 78.357z"}),Object(_.jsx)("path",{id:"XMLID_327_",d:"m140.025 61.668c-21.738-8.949-47.704-4.614-65.337 13.02-17.633 17.633-21.968 43.599-13.019 65.337 19.2-32.164 46.192-59.156 78.356-78.357z"}),Object(_.jsx)("circle",{id:"XMLID_328_",cx:"255",cy:"255",r:"90"}),Object(_.jsx)("path",{id:"XMLID_331_",d:"m450 255c0-107.523-87.477-195-195-195s-195 87.477-195 195 87.477 195 195 195 195-87.477 195-195zm-315 0c0-66.169 53.831-120 120-120s120 53.831 120 120c0 66.168-53.832 120-120 120s-120-53.832-120-120z"})]})}),Object(_.jsx)("a",{href:"/",children:Object(_.jsx)("p",{className:"text-2xl font-semibold text-gray-700",children:" Harmony"})})]}),Object(_.jsxs)("div",{className:"flex-auto flex justify-center pt-3",children:[Object(_.jsx)("a",{className:"text-base text-gray-700 pr-4",href:"/userlist",children:"\ud30c\ud2b8\ub108 \ucc3e\uae30"}),Object(_.jsx)("a",{className:"text-base text-gray-700 pr-4",href:"/projectlist",children:"\ud504\ub85c\uc81d\ud2b8 \ucc3e\uae30"}),Object(_.jsx)("a",{className:"text-base text-gray-700",href:"/",children:"\ud504\ub85c\uc81d\ud2b8 \ub4f1\ub85d"})]}),Object(_.jsx)("div",{className:"flex-auto flex justify-center",children:this.props.USER_LOGIN?Object(_.jsx)("div",{children:Object(_.jsxs)("div",{className:"flex flex-row flex-nowrap align-middle justify-center",children:[Object(_.jsxs)("p",{className:"text-sm text-gray-700 pt-3",children:[this.props.USER_NAME,"\ub2d8 \uc548\ub155\ud558\uc138\uc694"]}),Object(_.jsx)("button",{type:"button",className:"border border-green-300 text-green-300 rounded-md px-4 py-2 ml-3 transition duration-500 ease select-none hover:text-white hover:bg-green-300 hover:border-green-300 focus:outline-none focus:shadow-outline",onClick:this.logoutButton,children:Object(_.jsxs)("div",{className:"flex flex-row flex-nowrap align-middle justify-center",children:["\ub85c\uadf8\uc544\uc6c3",Object(_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current text-2xl w-4 h-4 ml-2 mt-1",viewBox:"0 0 20 20",fill:"currentColor",children:Object(_.jsx)("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z","clip-rule":"evenodd"})})]})})]})}):Object(_.jsx)("div",{children:Object(_.jsx)("button",{type:"button",className:"border border-yellow-400 text-yellow-400 rounded-md px-4 py-2 mr-3 mt-2 lg:mt-0 transition duration-500 ease select-none hover:text-white hover:bg-yellow-400 focus:outline-none focus:shadow-outline",onClick:this.loginButtonForKakao,children:Object(_.jsxs)("div",{className:"flex flex-row flex-nowrap align-middle justify-center",children:[Object(_.jsx)("span",{children:"Kakao\ub85c \uc2dc\uc791\ud558\uae30!"}),Object(_.jsxs)("svg",{id:"Bold",className:"fill-current text-2xl w-6 h-6 ml-2","enable-background":"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg",children:[Object(_.jsx)("path",{d:"m9.462 9.306-.692 1.951h1.383z"}),Object(_.jsx)("path",{d:"m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.299 4.45-1.333 4.47-1.113 4.599.276.161.634-.005 5.357-3.311.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399s-5.373-9.399-12-9.399zm-5.942 12.023c0 .362-.311.657-.692.657s-.692-.295-.692-.657v-4.086h-1.08c-.375 0-.679-.302-.679-.673s.303-.674.678-.674h3.545c.375 0 .679.302.679.673s-.305.674-.679.674h-1.08zm5.378.648c-.72 0-.587-.565-.919-1.195h-2.111c-.329.625-.2 1.195-.919 1.195-.693.001-.815-.421-.604-1.071l1.656-4.33c.117-.33.471-.669.922-.679.452.01.807.349.923.679 1.093 3.39 2.654 5.402 1.052 5.401zm3.939-.092h-2.221c-1.159 0-.454-1.565-.663-5.301 0-.379.317-.688.707-.688s.707.308.707.688v4.04h1.471c.366 0 .663.283.663.63-.001.348-.298.631-.664.631zm5.419-.518c-.025.181-.122.344-.269.454-.955.721-1.661-1.381-2.593-2.271l-.24.239v1.5c0 .38-.31.688-.693.688-.382 0-.692-.308-.692-.688v-4.705c0-.379.31-.688.692-.688s.692.308.692.688v1.478c1.277-.958 1.985-2.67 2.792-1.869.792.786-.848 1.474-1.527 2.422 1.604 2.212 1.909 2.267 1.838 2.752z"})]})]})})})})]}),Object(_.jsx)("hr",{})]})}}]),c}(s.Component),T=c.p+"static/media/MainIntroIMG.756755c1.png",M=function(e){Object(k.a)(c,e);var t=Object(E.a)(c);function c(e){return Object(v.a)(this,c),t.call(this,e)}return Object(w.a)(c,[{key:"render",value:function(){return Object(_.jsxs)("div",{className:"motion-safe:animate-fadeIn min-h-screen pattern",children:[Object(_.jsx)("div",{className:"flex flex-row justify-center",children:Object(_.jsx)("p",{className:"text-xl text-gray-700 lg:text-4xl pt-5",children:"\uc88b\uc740 \uc0ac\ub78c\ub4e4\uacfc \ud568\uaed8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud558\uc138\uc694!"})}),Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:T,alt:"MainIntroIMG"})})]})}}]),c}(s.Component),I=function(e){Object(k.a)(c,e);var t=Object(E.a)(c);function c(e){return Object(v.a)(this,c),t.call(this,e)}return Object(w.a)(c,[{key:"render",value:function(){return Object(_.jsxs)("div",{className:"flex flex-col justify-center lg:flex-row h-28 bg-gray-100 mb-1 pt-5",children:[Object(_.jsx)("div",{className:"flex justify-center",children:Object(_.jsx)("p",{className:"text-gray-700 text-4xl font-bold mr-5",children:"Harmony"})}),Object(_.jsxs)("div",{className:"flex flex-col",children:[Object(_.jsx)("p",{className:"text-xs text-gray-300 lg:text-left text-center",children:"\u24d2 2021. SeongrokLEE All Rights Reserved"}),Object(_.jsx)("p",{className:"text-xs text-gray-300 lg:text-left text-center",children:"Icons made by Freepik from www.flaticon.com"}),Object(_.jsx)("p",{className:"text-xs text-gray-300 lg:text-left text-center",children:"School vector created by pch.vector - www.freepik.com"})]})]})}}]),c}(s.Component),L=c(31),z=function(e){Object(k.a)(c,e);var t=Object(E.a)(c);function c(e){var s;return Object(v.a)(this,c),(s=t.call(this,e)).state={parsed:{}},s.state.parsed=L.parse(window.location.search),console.log(s.state.parsed),s}return Object(w.a)(c,[{key:"componentDidMount",value:function(){this.props.getKakaoToken(this.state.parsed.code)}},{key:"render",value:function(){return Object(_.jsxs)("div",{className:"grid grid-cols-1 justify-items-center animate-pulse",children:[Object(_.jsx)("div",{className:"mt-32",children:Object(_.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-20 w-20 fill-current text-gray-600",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(_.jsx)("path",{"fill-rule":"evenodd",d:"M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z","clip-rule":"evenodd"}),Object(_.jsx)("path",{"fill-rule":"evenodd",d:"M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z","clip-rule":"evenodd"}),Object(_.jsx)("path",{"fill-rule":"evenodd",d:"M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z","clip-rule":"evenodd"})]})}),Object(_.jsx)("span",{className:"text-sm text-gray-600",children:"\uc0ac\uc6a9\uc790 \uc778\uc99d\uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\uace0 \uc788\uc2b5\ub2c8\ub2e4.."})]})}}]),c}(s.Component),A=function(e){Object(k.a)(c,e);var t=Object(E.a)(c);function c(e){return Object(v.a)(this,c),t.call(this,e)}return Object(w.a)(c,[{key:"render",value:function(){return Object(_.jsx)("div",{className:"flex bg-gray-50 min-h-screen justify-center",children:Object(_.jsxs)("div",{className:"flex flex-col w-screen border-gray-600 m-6 lg:w-96",children:[Object(_.jsx)("h1",{className:"text-3xl font-semibold text-gray-600",children:"SignUp"}),Object(_.jsx)("h2",{className:"mt-6 text-gray-600 text-base font-semibold",children:"GitPage \ub610\ub294 \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc0ac\uc774\ud2b8 \ub9c1\ud06c"}),Object(_.jsxs)("div",{className:"relative mt-3",children:[Object(_.jsx)("div",{className:"absolute flex border border-transparent left-0 top-0 h-full w-10",children:Object(_.jsx)("div",{className:"flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full",children:Object(_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(_.jsx)("path",{"fill-rule":"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z","clip-rule":"evenodd"})})})}),Object(_.jsx)("input",{name:"blogUrl",type:"text",placeholder:"http://harmony.github.io",className:"text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"})]}),Object(_.jsx)("h2",{className:"mt-3 text-gray-600 text-base font-semibold",children:"\ud76c\ub9dd \ubd84\uc57c"}),Object(_.jsxs)("div",{className:"flex flex-row",children:[Object(_.jsxs)("label",{class:"inline-flex items-center",children:[Object(_.jsx)("input",{type:"radio",name:"jobs",class:"form-checkbox text-green-500"}),Object(_.jsx)("td",{class:"px-2 text-center",children:Object(_.jsx)("span",{class:"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs",children:"BackEnd"})})]}),Object(_.jsxs)("label",{class:"inline-flex items-center",children:[Object(_.jsx)("input",{type:"radio",name:"jobs",class:"form-checkbox text-green-500"}),Object(_.jsx)("td",{class:"px-2 text-center",children:Object(_.jsx)("span",{class:"bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs",children:"FrontEnd"})})]}),Object(_.jsxs)("label",{class:"inline-flex items-center",children:[Object(_.jsx)("input",{type:"radio",name:"jobs",class:"form-checkbox text-green-500"}),Object(_.jsx)("td",{class:"px-2 text-center",children:Object(_.jsx)("span",{class:"bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs",children:"Design"})})]})]}),Object(_.jsx)("div",{class:"mt-6",children:Object(_.jsx)("button",{type:"button",class:"w-full focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg",children:"SignUp"})})]})})}}]),c}(s.Component),U=function(e){Object(k.a)(c,e);var t=Object(E.a)(c);function c(e){var s;return Object(v.a)(this,c),(s=t.call(this,e)).closeModal=s.closeModal.bind(Object(y.a)(s)),s}return Object(w.a)(c,[{key:"closeModal",value:function(){console.log("close Error Modal"),this.props.closeErrorModal(this.props.ERROR_TARGET_PATH)}},{key:"render",value:function(){var e=this.props.ERROR_STATE,t=this.props.ERROR_MSG;return Object(_.jsx)("div",{children:e?Object(_.jsx)("div",{className:"flex fixed h-full w-full items-center justify-center bg-black bg-opacity-75 z-50",children:Object(_.jsx)("div",{class:"absolute",children:Object(_.jsxs)("div",{class:"rounded-lg shadow-lg bg-white my-3",children:[Object(_.jsxs)("div",{class:"flex justify-between border-b border-gray-100 px-5 py-4",children:[Object(_.jsxs)("div",{className:"flex flex-row inline-block align-middle",children:[Object(_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-red-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(_.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),Object(_.jsx)("span",{class:"font-bold text-gray-700 text-lg",children:"Error"})]}),Object(_.jsx)("div",{children:Object(_.jsx)("button",{children:Object(_.jsx)("i",{class:"fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"})})})]}),Object(_.jsx)("div",{class:"px-10 py-5 text-gray-600",children:t}),Object(_.jsx)("div",{class:"px-5 py-4 flex justify-end",children:Object(_.jsx)("button",{onClick:this.closeModal,class:"text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150",children:"OK"})})]})})}):""})}}]),c}(s.Component),B=c(6),C=c.n(B),G=c(10),D=function(e){Object(k.a)(c,e);var t=Object(E.a)(c);function c(e){var s;return Object(v.a)(this,c),(s=t.call(this,e)).state={name:"",blogLink:"",jobTag:"",profileImage:""},s.state.name=s.props.name||"User",s.state.blogLink=s.props.blogLink||"http://harmony.seongrok.net",s.state.jobTag=s.props.jobTag||"1",s.state.profileImage=s.props.profileImage||"http://k.kakaocdn.net/dn/5b4p3/btqXfJNCwln/xkWdK3xaopQHiqj3kG3DZ0/img_640x640.jpg",s}return Object(w.a)(c,[{key:"render",value:function(){return Object(_.jsx)("div",{className:"w-full lg:w-72 h-56",children:Object(_.jsxs)("div",{class:"relative bg-white rounded-3xl py-6 px-6 my-4 shadow-xl",children:[Object(_.jsx)("div",{class:" text-white flex items-center absolute rounded-full shadow-xl bg-gray-200 h-16 w-16 left-4 -top-6 overflow-hidden",children:Object(_.jsx)("img",{src:this.state.profileImage,alt:"UserImage"})}),Object(_.jsxs)("div",{class:"mt-8",children:[Object(_.jsx)("p",{class:"text-xl font-semibold my-2",children:this.state.name}),Object(_.jsxs)("div",{class:"flex space-x-2 text-gray-400 text-sm my-3",children:[Object(_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(_.jsx)("path",{"fill-rule":"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z","clip-rule":"evenodd"})}),Object(_.jsx)("p",{className:"truncate",children:this.state.blogLink})]}),Object(_.jsx)("div",{class:"border-t-2"}),Object(_.jsx)("div",{class:"flex justify-between",children:Object(_.jsxs)("div",{class:"my-2",children:[Object(_.jsx)("p",{class:"font-semibold text-base mb-2",children:"\uc804\ubb38\ubd84\uc57c"}),Object(_.jsx)("td",{class:"text-center",children:Object(_.jsx)("span",{class:"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs",children:"BackEnd"})})]})})]})]})})}}]),c}(s.Component),P=function(e){Object(k.a)(c,e);var t=Object(E.a)(c);function c(e){return Object(v.a)(this,c),t.call(this,e)}return Object(w.a)(c,[{key:"render",value:function(){return Object(_.jsx)("div",{className:"w-full lg:w-72 h-56 animate-pulse",children:Object(_.jsxs)("div",{class:"relative bg-white rounded-3xl py-6 px-6 my-4 shadow-xl",children:[Object(_.jsx)("div",{class:" text-white flex items-center absolute rounded-full shadow-xl left-4 -top-6 overflow-hidden h-16 w-16 bg-gray-200"}),Object(_.jsxs)("div",{class:"mt-8",children:[Object(_.jsx)("div",{class:"h-6 bg-gray-200 rounded w-3/4"}),Object(_.jsxs)("div",{class:"flex space-x-2 text-gray-400 text-sm my-3",children:[Object(_.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(_.jsx)("path",{"fill-rule":"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z","clip-rule":"evenodd"})}),Object(_.jsx)("div",{class:"h-4 bg-gray-200 rounded w-3/4"})]}),Object(_.jsx)("div",{class:"border-t-2"}),Object(_.jsx)("div",{class:"flex justify-between",children:Object(_.jsxs)("div",{class:"my-2",children:[Object(_.jsx)("div",{class:"h-6 bg-gray-200 rounded w-14 my-2"}),Object(_.jsx)("div",{class:"h-4 bg-gray-200 rounded w-3/4"})]})})]})]})})}}]),c}(s.Component),F=c(21),K=c.n(F),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"error",t=arguments.length>1?arguments[1]:void 0;return function(){var c=Object(G.a)(C.a.mark((function c(s,n){return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:s({type:"Service/ERROR_MODAL_OPEN",size:{msg:e,path:t}});case 1:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},X=function(){var e=Object(G.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://r5fg3qi652.execute-api.ap-northeast-2.amazonaws.com/dev1/api/v1/accounts",e.prev=1,e.next=4,K.a.get("".concat("https://r5fg3qi652.execute-api.ap-northeast-2.amazonaws.com/dev1/api/v1/accounts"));case 4:return t=e.sent,e.abrupt("return",t.data.data);case 8:throw e.prev=8,e.t0=e.catch(1),console.log(e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),H=function(e){Object(k.a)(c,e);var t=Object(E.a)(c);function c(e){var s;return Object(v.a)(this,c),(s=t.call(this,e)).state={pageLoading:!0,userListData:{}},s}return Object(w.a)(c,[{key:"componentDidMount",value:function(){var e=Object(G.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,X();case 4:return t=e.sent,e.next=7,new Promise((function(e){setTimeout(e,1e3)}));case 7:return this.setState({pageLoading:!1,userListData:t}),e.abrupt("break",18);case 11:return e.prev=11,e.t0=e.catch(1),console.log("getUserList Failed, try again"),e.next=16,new Promise((function(e){setTimeout(e,1e3)}));case 16:e.next=0;break;case 18:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return Object.keys(this.state.userListData).length>0&&(e=this.state.userListData.map((function(e){return console.log(e),Object(_.jsx)("div",{className:"m-5",children:Object(_.jsx)(D,{name:e.name,blogLink:e.blogLink,jobTag:e.jobTag,profileImage:e.profileImageUrl})})}))),Object(_.jsxs)("div",{className:"min-h-screen bg-gray-50 justify-center",children:[Object(_.jsx)("div",{className:"flex flex-row justify-center lg:py-28",children:Object(_.jsx)("p",{className:"text-sm text-gray-700 lg:text-4xl pt-5",children:"\ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud558\uae30\uc804 \uc5b4\ub5a4 \uc0ac\ub78c\ub4e4\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694!"})}),this.state.pageLoading?Object(_.jsxs)("div",{className:"flex flex-col lg:flex-row flex-wrap justify-center mr-10 ml-10 lg:mr-28 lg:ml-28",children:[Object(_.jsx)("div",{className:"m-5",children:Object(_.jsx)(P,{})}),Object(_.jsx)("div",{className:"m-5",children:Object(_.jsx)(P,{})}),Object(_.jsx)("div",{className:"m-5",children:Object(_.jsx)(P,{})}),Object(_.jsx)("div",{className:"m-5",children:Object(_.jsx)(P,{})})]}):Object(_.jsx)("div",{className:"flex flex-col lg:flex-row flex-wrap justify-center mr-10 ml-10 lg:mr-28 lg:ml-28",children:e})]})}}]),c}(s.Component),J=function(e){Object(k.a)(c,e);var t=Object(E.a)(c);function c(e){return Object(v.a)(this,c),t.call(this,e)}return Object(w.a)(c,[{key:"render",value:function(){return Object(_.jsx)("div",{className:"flex flex-col lg:flex-row flex-wrap justify-center mr-10 ml-10 lg:mr-60 lg:ml-60",children:Object(_.jsxs)("div",{class:"w-full h-64 px-10 my-4 py-6 bg-white rounded-lg shadow-md",children:[Object(_.jsxs)("div",{class:"flex justify-between items-center",children:[Object(_.jsx)("span",{class:"font-light text-gray-600",children:"mar 10, 2019"}),Object(_.jsx)("a",{class:"px-2 py-1 bg-green-300 text-gray-100 font-bold rounded text-sm",href:"/",children:" \uc9c4\ud589\uc911 "})]}),Object(_.jsxs)("div",{class:"mt-2",children:[Object(_.jsx)("a",{class:"text-2xl text-gray-700 font-bold hover:text-gray-600",href:"/",children:"\uc81c\ubaa9"}),Object(_.jsx)("div",{className:"inline-block w-full h-20 overflow-clip overflow-hidden",children:Object(_.jsx)("p",{class:"inline-block mt-2 text-gray-600",children:"\ubaa8\ub4e0 \uad6d\ubbfc\uc740 \uadfc\ub85c\uc758 \uc758\ubb34\ub97c \uc9c4\ub2e4. \uad6d\uac00\ub294 \uadfc\ub85c\uc758 \uc758\ubb34\uc758 \ub0b4\uc6a9\uacfc \uc870\uac74\uc744 \ubbfc\uc8fc\uc8fc\uc758\uc6d0\uce59\uc5d0 \ub530\ub77c \ubc95\ub960\ub85c \uc815\ud55c\ub2e4. \ud589\uc815\uac01\ubd80\uc758 \uc124\uce58\xb7\uc870\uc9c1\uacfc \uc9c1\ubb34\ubc94\uc704\ub294 \ubc95\ub960\ub85c \uc815\ud55c\ub2e4. \ubaa8\ub4e0 \uad6d\ubbfc\uc740 \uc790\uae30\uc758 \ud589\uc704\uac00 \uc544\ub2cc \uce5c\uc871\uc758 \ud589\uc704\ub85c \uc778\ud558\uc5ec \ubd88\uc774\uc775\ud55c \ucc98\uc6b0\ub97c \ubc1b\uc9c0 \uc544\ub2c8\ud55c\ub2e4. \ud615\uc0ac\ud53c\uc758\uc790 \ub610\ub294 \ud615\uc0ac\ud53c\uace0\uc778\uc73c\ub85c\uc11c \uad6c\uae08\ub418\uc5c8\ub358 \uc790\uac00 \ubc95\ub960\uc774 \uc815\ud558\ub294 \ubd88\uae30\uc18c\ucc98\ubd84\uc744 \ubc1b\uac70\ub098 \ubb34\uc8c4\ud310\uacb0\uc744 \ubc1b\uc740 \ub54c\uc5d0\ub294 \ubc95\ub960\uc774 \uc815\ud558\ub294 \ubc14\uc5d0 \uc758\ud558\uc5ec \uad6d\uac00\uc5d0 \uc815\ub2f9\ud55c \ubcf4\uc0c1\uc744 \uccad\uad6c\ud560 \uc218 \uc788\ub2e4. \ubbfc\uc8fc\ud3c9\ud654\ud1b5\uc77c\uc790\ubb38\ud68c\uc758\uc758 \uc870\uc9c1\xb7\uc9c1\ubb34\ubc94\uc704 \uae30\ud0c0 \ud544\uc694\ud55c \uc0ac\ud56d\uc740 \ubc95\ub960\ub85c \uc815\ud55c\ub2e4. \uc608\ube44\ube44\ub294 \ucd1d\uc561\uc73c\ub85c \uad6d\ud68c\uc758 \uc758\uacb0\uc744 \uc5bb\uc5b4\uc57c \ud55c\ub2e4. \uc608\ube44\ube44\uc758 \uc9c0\ucd9c\uc740 \ucc28\uae30\uad6d\ud68c\uc758 \uc2b9\uc778\uc744 \uc5bb\uc5b4\uc57c \ud55c\ub2e4. \ubaa8\ub4e0 \uad6d\ubbfc\uc740 \ubc95 \uc55e\uc5d0 \ud3c9\ub4f1\ud558\ub2e4. \ub204\uad6c\ub4e0\uc9c0 \uc131\ubcc4\xb7\uc885\uad50 \ub610\ub294 \uc0ac\ud68c\uc801 \uc2e0\ubd84\uc5d0 \uc758\ud558\uc5ec \uc815\uce58\uc801\xb7\uacbd\uc81c\uc801\xb7\uc0ac\ud68c\uc801\xb7\ubb38\ud654\uc801 \uc0dd\ud65c\uc758 \ubaa8\ub4e0 \uc601\uc5ed\uc5d0 \uc788\uc5b4\uc11c \ucc28\ubcc4\uc744 \ubc1b\uc9c0 \uc544\ub2c8\ud55c\ub2e4. \ubaa8\ub4e0 \uad6d\ubbfc\uc740 \uace0\ubb38\uc744 \ubc1b\uc9c0 \uc544\ub2c8\ud558\uba70, \ud615\uc0ac\uc0c1 \uc790\uae30\uc5d0\uac8c \ubd88\ub9ac\ud55c \uc9c4\uc220\uc744 \uac15\uc694\ub2f9\ud558\uc9c0 \uc544\ub2c8\ud55c\ub2e4. \ub300\ud1b5\ub839\uc740 \ucde8\uc784\uc5d0 \uc988\uc74c\ud558\uc5ec \ub2e4\uc74c\uc758 \uc120\uc11c\ub97c \ud55c\ub2e4. \ud0c4\ud575\uacb0\uc815\uc740 \uacf5\uc9c1\uc73c\ub85c\ubd80\ud130 \ud30c\uba74\ud568\uc5d0 \uadf8\uce5c\ub2e4. \uadf8\ub7ec\ub098, \uc774\uc5d0 \uc758\ud558\uc5ec \ubbfc\uc0ac\uc0c1\uc774\ub098 \ud615\uc0ac\uc0c1\uc758 \ucc45\uc784\uc774 \uba74\uc81c\ub418\uc9c0\ub294 \uc544\ub2c8\ud55c\ub2e4. \uad6d\ud68c\uc758\uc6d0\uc758 \uc120\uac70\uad6c\uc640 \ube44\ub840\ub300\ud45c\uc81c \uae30\ud0c0 \uc120\uac70\uc5d0 \uad00\ud55c \uc0ac\ud56d\uc740 \ubc95\ub960\ub85c \uc815\ud55c\ub2e4. \uad6d\uac00\ub294 \ub18d\xb7\uc5b4\ubbfc\uacfc \uc911\uc18c\uae30\uc5c5\uc758 \uc790\uc870\uc870\uc9c1\uc744 \uc721\uc131\ud558\uc5ec\uc57c \ud558\uba70, \uadf8 \uc790\uc728\uc801 \ud65c\ub3d9\uacfc \ubc1c\uc804\uc744 \ubcf4\uc7a5\ud55c\ub2e4. \ub300\ubc95\uc6d0\uc5d0 \ub300\ubc95\uad00\uc744 \ub454\ub2e4. \ub2e4\ub9cc, \ubc95\ub960\uc774 \uc815\ud558\ub294 \ubc14\uc5d0 \uc758\ud558\uc5ec \ub300\ubc95\uad00\uc774 \uc544\ub2cc \ubc95\uad00\uc744 \ub458 \uc218 \uc788\ub2e4. \ud5cc\ubc95\uc7ac\ud310\uc18c \uc7ac\ud310\uad00\uc740 \ud0c4\ud575 \ub610\ub294 \uae08\uace0 \uc774\uc0c1\uc758 \ud615\uc758 \uc120\uace0\uc5d0 \uc758\ud558\uc9c0 \uc544\ub2c8\ud558\uace0\ub294 \ud30c\uba74\ub418\uc9c0 \uc544\ub2c8\ud55c\ub2e4. \uad6d\uac00\ub294 \ud3c9\uc0dd\uad50\uc721\uc744 \uc9c4\ud765\ud558\uc5ec\uc57c \ud55c\ub2e4. \ub300\ud1b5\ub839\uc740 \ubc95\ub960\uc774 \uc815\ud558\ub294 \ubc14\uc5d0 \uc758\ud558\uc5ec \ud6c8\uc7a5 \uae30\ud0c0\uc758 \uc601\uc804\uc744 \uc218\uc5ec\ud55c\ub2e4. \uc9c0\ubc29\uc790\uce58\ub2e8\uccb4\ub294 \uc8fc\ubbfc\uc758 \ubcf5\ub9ac\uc5d0 \uad00\ud55c \uc0ac\ubb34\ub97c \ucc98\ub9ac\ud558\uace0 \uc7ac\uc0b0\uc744 \uad00\ub9ac\ud558\uba70, \ubc95\ub839\uc758 \ubc94\uc704\uc548\uc5d0\uc11c \uc790\uce58\uc5d0 \uad00\ud55c \uaddc\uc815\uc744 \uc81c\uc815\ud560 \uc218 \uc788\ub2e4. \uc7ac\uc0b0\uad8c\uc758 \ud589\uc0ac\ub294 \uacf5\uacf5\ubcf5\ub9ac\uc5d0 \uc801\ud569\ud558\ub3c4\ub85d \ud558\uc5ec\uc57c \ud55c\ub2e4. \ub300\ud1b5\ub839\uc758 \uc784\uae30\ub294 5\ub144\uc73c\ub85c \ud558\uba70, \uc911\uc784\ud560 \uc218 \uc5c6\ub2e4. \ube44\uc0c1\uacc4\uc5c4\ud558\uc758 \uad70\uc0ac\uc7ac\ud310\uc740 \uad70\uc778\xb7\uad70\ubb34\uc6d0\uc758 \ubc94\uc8c4\ub098 \uad70\uc0ac\uc5d0 \uad00\ud55c \uac04\ucca9\uc8c4\uc758 \uacbd\uc6b0\uc640 \ucd08\ubcd1\xb7\ucd08\uc18c\xb7\uc720\ub3c5\uc74c\uc2dd\ubb3c\uacf5\uae09\xb7\ud3ec\ub85c\uc5d0 \uad00\ud55c \uc8c4\uc911 \ubc95\ub960\uc774 \uc815\ud55c \uacbd\uc6b0\uc5d0 \ud55c\ud558\uc5ec \ub2e8\uc2ec\uc73c\ub85c \ud560 \uc218 \uc788\ub2e4. \ub2e4\ub9cc, \uc0ac\ud615\uc744 \uc120\uace0\ud55c \uacbd\uc6b0\uc5d0\ub294 \uadf8\ub7ec\ud558\uc9c0 \uc544\ub2c8\ud558\ub2e4. \ub300\ubc95\uc6d0\uc7a5\uc758 \uc784\uae30\ub294 6\ub144\uc73c\ub85c \ud558\uba70, \uc911\uc784\ud560 \uc218 \uc5c6\ub2e4. \uc0ac\ud68c\uc801 \ud2b9\uc218\uacc4\uae09\uc758 \uc81c\ub3c4\ub294 \uc778\uc815\ub418\uc9c0 \uc544\ub2c8\ud558\uba70, \uc5b4\ub5a0\ud55c \ud615\ud0dc\ub85c\ub3c4 \uc774\ub97c \ucc3d\uc124\ud560 \uc218 \uc5c6\ub2e4. \uacf5\ubb34\uc6d0\uc778 \uadfc\ub85c\uc790\ub294 \ubc95\ub960\uc774 \uc815\ud558\ub294 \uc790\uc5d0 \ud55c\ud558\uc5ec \ub2e8\uacb0\uad8c\xb7\ub2e8\uccb4\uad50\uc12d\uad8c \ubc0f \ub2e8\uccb4\ud589\ub3d9\uad8c\uc744 \uac00\uc9c4\ub2e4."})})]}),Object(_.jsxs)("div",{class:"flex justify-between items-center mt-4",children:[Object(_.jsx)("a",{class:"text-blue-600 hover:underline",href:"/",children:"\uc790\uc138\ud788"}),Object(_.jsx)("div",{children:Object(_.jsxs)("a",{class:"flex items-center",href:"/",children:[Object(_.jsx)("img",{class:"mx-4 w-10 h-10 object-cover rounded-full sm:block",src:"http://k.kakaocdn.net/dn/5b4p3/btqXfJNCwln/xkWdK3xaopQHiqj3kG3DZ0/img_640x640.jpg",alt:"avatar"}),Object(_.jsx)("h1",{class:"text-gray-700 font-bold",children:"\uc131\ub85d"})]})})]})]})})}}]),c}(s.Component),q=function(e){Object(k.a)(c,e);var t=Object(E.a)(c);function c(e){return Object(v.a)(this,c),t.call(this,e)}return Object(w.a)(c,[{key:"render",value:function(){return Object(_.jsx)("div",{className:"flex flex-col lg:flex-row flex-wrap justify-center mr-10 ml-10 lg:mr-60 lg:ml-60 animate-pulse",children:Object(_.jsxs)("div",{class:"w-full h-64 px-10 my-4 py-6 bg-white rounded-lg shadow-md",children:[Object(_.jsxs)("div",{class:"flex justify-between items-center",children:[Object(_.jsx)("div",{class:"h-4 bg-gray-200 rounded w-1/4"}),Object(_.jsx)("a",{class:"px-2 py-1 bg-gray-200 text-gray-100 font-bold rounded text-sm",href:"/",children:" \uc9c4\ud589\uc911 "})]}),Object(_.jsxs)("div",{class:"mt-2",children:[Object(_.jsx)("a",{class:"text-2xl text-gray-700 font-bold hover:text-gray-600",href:"/",children:Object(_.jsx)("div",{class:"h-4 bg-gray-200 rounded w-2/4"})}),Object(_.jsxs)("div",{className:"inline-block w-full h-20 overflow-clip overflow-hidden",children:[Object(_.jsx)("div",{class:"mt-2 h-4 bg-gray-200 rounded w-1/4"}),Object(_.jsx)("div",{class:"mt-2 h-4 bg-gray-200 rounded w-3/4"}),Object(_.jsx)("div",{class:"mt-2 h-4 bg-gray-200 rounded w-2/4"})]})]}),Object(_.jsxs)("div",{class:"flex justify-between items-center mt-4",children:[Object(_.jsx)("div",{class:"h-4 bg-gray-200 rounded w-1/4"}),Object(_.jsx)("div",{children:Object(_.jsxs)("a",{class:"flex items-center",href:"/",children:[Object(_.jsx)("div",{class:" mx-4 w-10 h-10 object-cover rounded-full bg-gray-200"}),Object(_.jsx)("div",{class:"h-4 bg-gray-200 rounded w-10"})]})})]})]})})}}]),c}(s.Component),W=function(e){Object(k.a)(c,e);var t=Object(E.a)(c);function c(e){var s;return Object(v.a)(this,c),(s=t.call(this,e)).state={pageLoading:!0},s.loginButtonForKakao=s.loginButtonForKakao.bind(Object(y.a)(s)),s.logoutButton=s.logoutButton.bind(Object(y.a)(s)),s}return Object(w.a)(c,[{key:"componentDidMount",value:function(){var e=Object(G.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){setTimeout(e,3e3)}));case 2:this.setState({pageLoading:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loginButtonForKakao",value:function(){window.location.href="https://kauth.kakao.com/oauth/authorize?client_id=dab58a800514cc429576cf0f84c83ab0&redirect_uri=http://harmony.seongrok.net/kakao/auth&response_type=code"}},{key:"logoutButton",value:function(){this.props.logout()}},{key:"render",value:function(){return Object(_.jsx)("div",{className:"min-h-screen bg-gray-50 justify-center",children:this.state.pageLoading?Object(_.jsxs)("div",{children:[Object(_.jsx)(q,{}),Object(_.jsx)(q,{}),Object(_.jsx)(q,{}),Object(_.jsx)(q,{}),Object(_.jsx)(q,{}),Object(_.jsx)(q,{})]}):Object(_.jsxs)("div",{children:[Object(_.jsx)(J,{}),Object(_.jsx)(J,{}),Object(_.jsx)(J,{}),Object(_.jsx)(J,{}),Object(_.jsx)(J,{}),Object(_.jsx)(J,{})]})})}}]),c}(s.Component);var Y=Object(p.b)((function(e){return{APP_VERSION:e.APP_VERSION,TEST_VALUE:e.TEST_VALUE}}),(function(e){return{setTestValue:function(t){e(function(){var e=Object(G.a)(C.a.mark((function e(t,c){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"ServiceInformaion/SET_TEXT",size:"pong"});case 1:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}())},openErrorModal:function(t){e(V(t))}}}))(N);var Q=Object(p.b)((function(e){return{USER_LOGIN:e.USER_LOGIN,USER_NAME:e.USER_NAME}}),(function(e){return{logout:function(){e(function(){var e=Object(G.a)(C.a.mark((function e(t,c){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"Service/LOGOUT",size:{}});case 1:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}())}}}))(S);var Z=Object(p.b)((function(e){return{}}),(function(e){return{}}))(M);var $=Object(p.b)((function(e){return{}}),(function(e){return{}}))(I);var ee=Object(p.b)((function(e){return{}}),(function(e){return{getKakaoToken:function(t){e(function(e){return function(){var t=Object(G.a)(C.a.mark((function t(c,s){var n,r,a,l,i;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://r5fg3qi652.execute-api.ap-northeast-2.amazonaws.com/dev1/api/v1/kakao/authorize",t.prev=2,t.next=5,K.a.get("".concat("https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=dab58a800514cc429576cf0f84c83ab0&redirect_uri=http://harmony.seongrok.net/kakao/auth&code=").concat(e));case 5:r=t.sent,a=r.data.access_token,l=r.data.refresh_token,c({type:"Service/SET_TOKEN_INFO",size:{accessToken:a,refreshToken:l}}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),c(V("\uce74\uce74\uc624\ud1a1 \uc544\uc774\ub514 \uc815\ubcf4\ub97c \ub85c\ub4dc\ud558\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4 \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.","/"));case 14:return t.prev=14,console.log("".concat(n)),t.next=18,K.a.get("".concat(n),{headers:{userToken:s().ACCESS_TOKEN,userTokenType:"kakao"}});case 18:i=t.sent,c({type:"Service/SET_USER_INFO",size:{USER_ID:i.data.data.id,USER_JOBTAG:i.data.data.jobTag,USER_NAME:i.data.data.name,USER_PROFILE:i.data.data.profileImageUrl}}),window.location.pathname="/",t.next=26;break;case 23:t.prev=23,t.t1=t.catch(14),t.t1.response?c(V("\ud68c\uc6d0\ub4f1\ub85d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4","/signup")):t.t1.request?c(V("\uc11c\ube44\uc2a4\uac00 \uc624\ud504\ub77c\uc778 \uc0c1\ud0dc \uc785\ub2c8\ub2e4 \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.","/")):c(V("\uce74\uce74\uc624\ud1a1 \uc544\uc774\ub514 \uc815\ubcf4\ub97c \ub85c\ub4dc\ud558\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4 \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.","/"));case 26:case"end":return t.stop()}}),t,null,[[2,11],[14,23]])})));return function(e,c){return t.apply(this,arguments)}}()}(t))}}}))(z);var te=Object(p.b)((function(e){return{}}),(function(e){return{}}))(A);var ce=Object(p.b)((function(e){return{ERROR_STATE:e.ERROR_STATE,ERROR_MSG:e.ERROR_MSG,ERROR_TARGET_PATH:e.ERROR_TARGET_PATH}}),(function(e){return{openErrorModal:function(t){e(V(t))},closeErrorModal:function(t){e(function(e){return function(){var t=Object(G.a)(C.a.mark((function t(c,s){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:"Service/ERROR_MODAL_CLOSE"}),void 0!=e&&(window.location.pathname=e);case 2:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()}(t))}}}))(U);var se=Object(p.b)((function(e){return{}}),(function(e){return{}}))(H);var ne=Object(p.b)((function(e){return{}}),(function(e){return{openErrorModal:function(t){e(V(t))}}}))(W),re=(c(76),Object(x.b)(O));a.a.render(Object(_.jsx)(m.a,{basename:"/",children:Object(_.jsx)(p.a,{store:O,children:Object(_.jsx)(f.a,{loading:null,persistor:re,children:Object(_.jsxs)(n.a.StrictMode,{children:[Object(_.jsx)(ce,{}),Object(_.jsxs)(g.a,{exact:!0,path:"/",children:[Object(_.jsx)(Q,{}),Object(_.jsx)(Z,{}),Object(_.jsx)($,{})]}),Object(_.jsx)(g.a,{exact:!0,path:"/service/info",children:Object(_.jsx)(Y,{})}),Object(_.jsx)(g.a,{exact:!0,path:"/kakao/auth",children:Object(_.jsx)(ee,{})}),Object(_.jsxs)(g.a,{exact:!0,path:"/signup",children:[Object(_.jsx)(Q,{}),Object(_.jsx)(te,{}),Object(_.jsx)($,{})]}),Object(_.jsxs)(g.a,{exact:!0,path:"/userlist",children:[Object(_.jsx)(Q,{}),Object(_.jsx)(se,{}),Object(_.jsx)($,{})]}),Object(_.jsxs)(g.a,{exact:!0,path:"/projectlist",children:[Object(_.jsx)(Q,{}),Object(_.jsx)(ne,{}),Object(_.jsx)($,{})]})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[78,1,2]]]);
//# sourceMappingURL=main.9e2b2575.chunk.js.map