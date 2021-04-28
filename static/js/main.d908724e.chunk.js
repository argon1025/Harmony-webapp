(this["webpackJsonpharmony-webapp"]=this["webpackJsonpharmony-webapp"]||[]).push([[0],{76:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(22),a=c.n(r),l=c(17),i=c(40),o=c(13),d={APP_VERSION:"0.1",TEST_VALUE:0,ACCESS_TOKEN:"",REFRESH_TOKEN:"",USER_LOGIN:!1,USER_ID:"",USER_JOBTAG:"",USER_NAME:"",USER_PROFILE:"",USER_LOGIN_TYPE:"",ERROR_STATE:!1,ERROR_MSG:"",ERROR_TARGET_PATH:""},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(console.log(e),console.log(t),t.type){case"ServiceInformaion/SET_TEXT":return Object(o.a)(Object(o.a)({},e),{},{TEST_VALUE:t.size});case"Service/ERROR_MODAL_OPEN":return Object(o.a)(Object(o.a)({},e),{},{ERROR_MSG:t.size.msg,ERROR_STATE:!0,ERROR_TARGET_PATH:t.size.path});case"Service/ERROR_MODAL_CLOSE":return Object(o.a)(Object(o.a)({},e),{},{ERROR_MSG:"",ERROR_STATE:!1});case"Service/SET_TOKEN_INFO":return Object(o.a)(Object(o.a)({},e),{},{ACCESS_TOKEN:t.size.accessToken,REFRESH_TOKEN:t.size.refreshToken});case"Service/SET_USER_INFO":return Object(o.a)(Object(o.a)({},e),{},{USER_LOGIN:!0,USER_ID:t.size.USER_ID,USER_JOBTAG:t.size.USER_JOBTAG,USER_NAME:t.size.USER_NAME,USER_PROFILE:t.size.USER_PROFILE,USER_LOGIN_TYPE:"kakao"});case"Service/LOGOUT":return Object(o.a)(Object(o.a)({},e),{},{ACCESS_TOKEN:"",REFRESH_TOKEN:"",USER_LOGIN:!1,USER_ID:"",USER_JOBTAG:"",USER_NAME:"",USER_PROFILE:"",USER_LOGIN_TYPE:""});default:return e}},x=c(24),b=c(42),u={key:"root",storage:c.n(b).a},h=Object(x.a)(u,j),O=Object(l.d)(h,Object(l.a)(i.a)),p=c(8);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=c(43),m=c(44),v=c(2),g=c(3),w=c(4),y=c(15),E=c(6),_=c(5),k=c(0),R=c(31),N=function(e){Object(E.a)(c,e);var t=Object(_.a)(c);function c(e){var s;return Object(g.a)(this,c),(s=t.call(this,e)).state={parsed:{}},s.state.parsed=R.parse(window.location.search),console.log(s.state.parsed),s.clickSetTestValueButton=s.clickSetTestValueButton.bind(Object(y.a)(s)),s.clickOpenErrorModalButton=s.clickOpenErrorModalButton.bind(Object(y.a)(s)),s}return Object(w.a)(c,[{key:"clickGoToIndexButton",value:function(){window.location.pathname="/"}},{key:"clickSetTestValueButton",value:function(){this.props.setTestValue("pong!")}},{key:"clickOpenErrorModalButton",value:function(){this.props.openErrorModal("\ud14c\uc2a4\ud2b8 \ud14c\uc2a4\ud2b8 \ud14c\uc2a4\ud2b8")}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"m-6",children:[Object(k.jsx)("h1",{className:"text-4xl",children:"service Info"}),Object(k.jsxs)("h2",{className:"text-xl",children:["service version : ",this.props.APP_VERSION]}),Object(k.jsx)("button",{className:"bg-red-500 hover:bg-red-700 rounded-lg p-1 m-1 text-white",onClick:this.clickGoToIndexButton,children:"go to index"}),Object(k.jsx)("button",{className:"bg-red-500 hover:bg-red-700 rounded-lg p-1 m-1 text-white",onClick:this.clickSetTestValueButton,children:"ping!"}),Object(k.jsx)("button",{className:"bg-red-500 hover:bg-red-700 rounded-lg p-1 m-1 text-white",onClick:this.clickOpenErrorModalButton,children:"openErrorModal"}),Object(k.jsx)("p",{children:this.props.TEST_VALUE}),Object(k.jsxs)("div",{children:["Icons made by ",Object(k.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," from ",Object(k.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(k.jsx)("a",{href:"https://www.freepik.com/vectors/school",children:"School vector created by pch.vector - www.freepik.com"})]})}}]),c}(s.Component),S=function(e){Object(E.a)(c,e);var t=Object(_.a)(c);function c(e){var s;return Object(g.a)(this,c),(s=t.call(this,e)).loginButtonForKakao=s.loginButtonForKakao.bind(Object(y.a)(s)),s.logoutButton=s.logoutButton.bind(Object(y.a)(s)),s}return Object(w.a)(c,[{key:"loginButtonForKakao",value:function(){window.location.href="https://kauth.kakao.com/oauth/authorize?client_id=dab58a800514cc429576cf0f84c83ab0&redirect_uri=http://harmony.seongrok.net/kakao/auth&response_type=code"}},{key:"logoutButton",value:function(){this.props.logout()}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"bg-gray-50",children:[Object(k.jsxs)("div",{className:"flex lg:flex-row flex-col p-3",children:[Object(k.jsxs)("div",{className:"flex flex-auto flex-row justify-center pt-2",children:[Object(k.jsx)("svg",{className:"fill-current text-gray-700 text-2xl w-6 h-6",viewBox:"0 0 510 510",xmlns:"http://www.w3.org/2000/svg",children:Object(k.jsxs)("g",{id:"XMLID_131_",children:[Object(k.jsx)("path",{id:"XMLID_133_",d:"m310.37 36.901c-9.066-21.65-30.468-36.901-55.37-36.901s-46.304 15.252-55.37 36.901c17.721-4.501 36.269-6.901 55.37-6.901s37.649 2.4 55.37 6.901z"}),Object(k.jsx)("path",{id:"XMLID_135_",d:"m199.63 473.099c9.066 21.65 30.468 36.901 55.37 36.901s46.304-15.251 55.37-36.901c-17.721 4.501-36.269 6.901-55.37 6.901s-37.649-2.4-55.37-6.901z"}),Object(k.jsx)("path",{id:"XMLID_274_",d:"m473.099 199.63c4.501 17.72 6.901 36.269 6.901 55.37s-2.4 37.649-6.901 55.37c21.65-9.066 36.901-30.468 36.901-55.37s-15.251-46.304-36.901-55.37z"}),Object(k.jsx)("path",{id:"XMLID_297_",d:"m0 255c0 24.902 15.251 46.304 36.901 55.37-4.5-17.72-6.901-36.269-6.901-55.37s2.401-37.65 6.901-55.37c-21.65 9.066-36.901 30.468-36.901 55.37z"}),Object(k.jsx)("path",{id:"XMLID_298_",d:"m392.886 57.114c-8.006 0-15.772 1.558-22.953 4.529 32.183 19.202 59.19 46.204 78.399 78.382 8.949-21.738 4.614-47.704-13.019-65.338-11.334-11.332-26.401-17.573-42.427-17.573z"}),Object(k.jsx)("path",{id:"XMLID_310_",d:"m369.975 448.332c7.318 3.013 15.113 4.526 22.911 4.526 15.364 0 30.729-5.849 42.427-17.545 17.633-17.634 21.968-43.6 13.019-65.338-19.201 32.164-46.193 59.156-78.357 78.357z"}),Object(k.jsx)("path",{id:"XMLID_327_",d:"m140.025 61.668c-21.738-8.949-47.704-4.614-65.337 13.02-17.633 17.633-21.968 43.599-13.019 65.337 19.2-32.164 46.192-59.156 78.356-78.357z"}),Object(k.jsx)("circle",{id:"XMLID_328_",cx:"255",cy:"255",r:"90"}),Object(k.jsx)("path",{id:"XMLID_331_",d:"m450 255c0-107.523-87.477-195-195-195s-195 87.477-195 195 87.477 195 195 195 195-87.477 195-195zm-315 0c0-66.169 53.831-120 120-120s120 53.831 120 120c0 66.168-53.832 120-120 120s-120-53.832-120-120z"})]})}),Object(k.jsx)("p",{className:"text-2xl font-semibold text-gray-700",children:" Harmony"})]}),Object(k.jsxs)("div",{className:"flex-auto flex justify-center pt-3",children:[Object(k.jsx)("a",{className:"text-base text-gray-700 pr-4",href:"/",children:"\ud30c\ud2b8\ub108 \ucc3e\uae30"}),Object(k.jsx)("a",{className:"text-base text-gray-700 pr-4",href:"/",children:"\ud504\ub85c\uc81d\ud2b8 \ucc3e\uae30"}),Object(k.jsx)("a",{className:"text-base text-gray-700",href:"/",children:"\ud504\ub85c\uc81d\ud2b8 \ub4f1\ub85d"})]}),Object(k.jsx)("div",{className:"flex-auto flex justify-center",children:this.props.USER_LOGIN?Object(k.jsx)("div",{children:Object(k.jsxs)("div",{className:"flex flex-row flex-nowrap align-middle justify-center",children:[Object(k.jsxs)("p",{className:"text-sm text-gray-700 pt-3",children:[this.props.USER_NAME,"\ub2d8 \uc548\ub155\ud558\uc138\uc694"]}),Object(k.jsx)("button",{type:"button",className:"border border-green-300 text-green-300 rounded-md px-4 py-2 ml-3 transition duration-500 ease select-none hover:text-white hover:bg-green-300 hover:border-green-300 focus:outline-none focus:shadow-outline",onClick:this.logoutButton,children:Object(k.jsxs)("div",{className:"flex flex-row flex-nowrap align-middle justify-center",children:["\ub85c\uadf8\uc544\uc6c3",Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"fill-current text-2xl w-4 h-4 ml-2 mt-1",viewBox:"0 0 20 20",fill:"currentColor",children:Object(k.jsx)("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z","clip-rule":"evenodd"})})]})})]})}):Object(k.jsx)("div",{children:Object(k.jsx)("button",{type:"button",className:"border border-yellow-400 text-yellow-400 rounded-md px-4 py-2 mr-3 mt-2 lg:mt-0 transition duration-500 ease select-none hover:text-white hover:bg-yellow-400 focus:outline-none focus:shadow-outline",onClick:this.loginButtonForKakao,children:Object(k.jsxs)("div",{className:"flex flex-row flex-nowrap align-middle justify-center",children:[Object(k.jsx)("span",{children:"Kakao\ub85c \uc2dc\uc791\ud558\uae30!"}),Object(k.jsxs)("svg",{id:"Bold",className:"fill-current text-2xl w-6 h-6 ml-2","enable-background":"new 0 0 24 24",height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg",children:[Object(k.jsx)("path",{d:"m9.462 9.306-.692 1.951h1.383z"}),Object(k.jsx)("path",{d:"m12 1c-6.627 0-12 4.208-12 9.399 0 3.356 2.246 6.301 5.625 7.963-1.299 4.45-1.333 4.47-1.113 4.599.276.161.634-.005 5.357-3.311.692.097 1.404.148 2.131.148 6.627 0 12-4.208 12-9.399s-5.373-9.399-12-9.399zm-5.942 12.023c0 .362-.311.657-.692.657s-.692-.295-.692-.657v-4.086h-1.08c-.375 0-.679-.302-.679-.673s.303-.674.678-.674h3.545c.375 0 .679.302.679.673s-.305.674-.679.674h-1.08zm5.378.648c-.72 0-.587-.565-.919-1.195h-2.111c-.329.625-.2 1.195-.919 1.195-.693.001-.815-.421-.604-1.071l1.656-4.33c.117-.33.471-.669.922-.679.452.01.807.349.923.679 1.093 3.39 2.654 5.402 1.052 5.401zm3.939-.092h-2.221c-1.159 0-.454-1.565-.663-5.301 0-.379.317-.688.707-.688s.707.308.707.688v4.04h1.471c.366 0 .663.283.663.63-.001.348-.298.631-.664.631zm5.419-.518c-.025.181-.122.344-.269.454-.955.721-1.661-1.381-2.593-2.271l-.24.239v1.5c0 .38-.31.688-.693.688-.382 0-.692-.308-.692-.688v-4.705c0-.379.31-.688.692-.688s.692.308.692.688v1.478c1.277-.958 1.985-2.67 2.792-1.869.792.786-.848 1.474-1.527 2.422 1.604 2.212 1.909 2.267 1.838 2.752z"})]})]})})})})]}),Object(k.jsx)("hr",{})]})}}]),c}(s.Component),T=c.p+"static/media/MainIntroIMG.756755c1.png",M=function(e){Object(E.a)(c,e);var t=Object(_.a)(c);function c(e){return Object(g.a)(this,c),t.call(this,e)}return Object(w.a)(c,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"motion-safe:animate-fadeIn min-h-screen pattern",children:[Object(k.jsx)("div",{className:"flex flex-row justify-center",children:Object(k.jsx)("p",{className:"text-xl text-gray-700 lg:text-4xl pt-5",children:"\uc88b\uc740 \uc0ac\ub78c\ub4e4\uacfc \ud568\uaed8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud558\uc138\uc694!"})}),Object(k.jsx)("div",{children:Object(k.jsx)("img",{src:T,alt:"MainIntroIMG"})})]})}}]),c}(s.Component),I=function(e){Object(E.a)(c,e);var t=Object(_.a)(c);function c(e){return Object(g.a)(this,c),t.call(this,e)}return Object(w.a)(c,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"flex flex-col justify-center lg:flex-row h-20 bg-gray-100 mb-1 pt-5",children:[Object(k.jsx)("div",{className:"flex justify-center",children:Object(k.jsx)("p",{className:"text-gray-700 text-4xl font-bold mr-5",children:"Harmony"})}),Object(k.jsxs)("div",{className:"flex flex-col",children:[Object(k.jsx)("p",{className:"text-xs text-gray-300 lg:text-left text-center",children:"\u24d2 2021. SeongrokLEE All Rights Reserved"}),Object(k.jsx)("p",{className:"text-xs text-gray-300 lg:text-left text-center",children:"Icons made by Freepik from www.flaticon.com"}),Object(k.jsx)("p",{className:"text-xs text-gray-300 lg:text-left text-center",children:"School vector created by pch.vector - www.freepik.com"})]})]})}}]),c}(s.Component),L=c(31),A=function(e){Object(E.a)(c,e);var t=Object(_.a)(c);function c(e){var s;return Object(g.a)(this,c),(s=t.call(this,e)).state={parsed:{}},s.state.parsed=L.parse(window.location.search),console.log(s.state.parsed),s}return Object(w.a)(c,[{key:"componentDidMount",value:function(){this.props.getKakaoToken(this.state.parsed.code)}},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"grid grid-cols-1 justify-items-center animate-pulse",children:[Object(k.jsx)("div",{className:"mt-32",children:Object(k.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-20 w-20 fill-current text-gray-600",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(k.jsx)("path",{"fill-rule":"evenodd",d:"M6.625 2.655A9 9 0 0119 11a1 1 0 11-2 0 7 7 0 00-9.625-6.492 1 1 0 11-.75-1.853zM4.662 4.959A1 1 0 014.75 6.37 6.97 6.97 0 003 11a1 1 0 11-2 0 8.97 8.97 0 012.25-5.953 1 1 0 011.412-.088z","clip-rule":"evenodd"}),Object(k.jsx)("path",{"fill-rule":"evenodd",d:"M5 11a5 5 0 1110 0 1 1 0 11-2 0 3 3 0 10-6 0c0 1.677-.345 3.276-.968 4.729a1 1 0 11-1.838-.789A9.964 9.964 0 005 11zm8.921 2.012a1 1 0 01.831 1.145 19.86 19.86 0 01-.545 2.436 1 1 0 11-1.92-.558c.207-.713.371-1.445.49-2.192a1 1 0 011.144-.83z","clip-rule":"evenodd"}),Object(k.jsx)("path",{"fill-rule":"evenodd",d:"M10 10a1 1 0 011 1c0 2.236-.46 4.368-1.29 6.304a1 1 0 01-1.838-.789A13.952 13.952 0 009 11a1 1 0 011-1z","clip-rule":"evenodd"})]})}),Object(k.jsx)("span",{className:"text-sm text-gray-600",children:"\uc0ac\uc6a9\uc790 \uc778\uc99d\uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\uace0 \uc788\uc2b5\ub2c8\ub2e4.."})]})}}]),c}(s.Component),z=function(e){Object(E.a)(c,e);var t=Object(_.a)(c);function c(e){return Object(g.a)(this,c),t.call(this,e)}return Object(w.a)(c,[{key:"render",value:function(){return Object(k.jsx)("div",{className:"flex bg-gray-50 min-h-screen justify-center",children:Object(k.jsxs)("div",{className:"flex flex-col w-screen border-gray-600 m-6 lg:w-96",children:[Object(k.jsx)("h1",{className:"text-3xl font-semibold text-gray-600",children:"SignUp"}),Object(k.jsx)("h2",{className:"mt-6 text-gray-600 text-base font-semibold",children:"GitPage \ub610\ub294 \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc0ac\uc774\ud2b8 \ub9c1\ud06c"}),Object(k.jsxs)("div",{className:"relative mt-3",children:[Object(k.jsx)("div",{className:"absolute flex border border-transparent left-0 top-0 h-full w-10",children:Object(k.jsx)("div",{className:"flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full",children:Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(k.jsx)("path",{"fill-rule":"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z","clip-rule":"evenodd"})})})}),Object(k.jsx)("input",{name:"blogUrl",type:"text",placeholder:"http://harmony.github.io",className:"text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"})]}),Object(k.jsx)("h2",{className:"mt-3 text-gray-600 text-base font-semibold",children:"\ud76c\ub9dd \ubd84\uc57c"}),Object(k.jsxs)("div",{className:"flex flex-row",children:[Object(k.jsxs)("label",{class:"inline-flex items-center",children:[Object(k.jsx)("input",{type:"radio",name:"jobs",class:"form-checkbox text-green-500"}),Object(k.jsx)("td",{class:"px-2 text-center",children:Object(k.jsx)("span",{class:"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs",children:"BackEnd"})})]}),Object(k.jsxs)("label",{class:"inline-flex items-center",children:[Object(k.jsx)("input",{type:"radio",name:"jobs",class:"form-checkbox text-green-500"}),Object(k.jsx)("td",{class:"px-2 text-center",children:Object(k.jsx)("span",{class:"bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs",children:"FrontEnd"})})]}),Object(k.jsxs)("label",{class:"inline-flex items-center",children:[Object(k.jsx)("input",{type:"radio",name:"jobs",class:"form-checkbox text-green-500"}),Object(k.jsx)("td",{class:"px-2 text-center",children:Object(k.jsx)("span",{class:"bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs",children:"Design"})})]})]}),Object(k.jsx)("div",{class:"mt-6",children:Object(k.jsx)("button",{type:"button",class:"w-full focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg",children:"SignUp"})})]})})}}]),c}(s.Component),U=function(e){Object(E.a)(c,e);var t=Object(_.a)(c);function c(e){var s;return Object(g.a)(this,c),(s=t.call(this,e)).closeModal=s.closeModal.bind(Object(y.a)(s)),s}return Object(w.a)(c,[{key:"closeModal",value:function(){console.log("close Error Modal"),this.props.closeErrorModal(this.props.ERROR_TARGET_PATH)}},{key:"render",value:function(){var e=this.props.ERROR_STATE,t=this.props.ERROR_MSG;return Object(k.jsx)("div",{children:e?Object(k.jsx)("div",{className:"flex fixed h-full w-full items-center justify-center bg-black bg-opacity-75 z-50",children:Object(k.jsx)("div",{class:"absolute",children:Object(k.jsxs)("div",{class:"rounded-lg shadow-lg bg-white my-3",children:[Object(k.jsxs)("div",{class:"flex justify-between border-b border-gray-100 px-5 py-4",children:[Object(k.jsxs)("div",{className:"flex flex-row inline-block align-middle",children:[Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-red-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(k.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),Object(k.jsx)("span",{class:"font-bold text-gray-700 text-lg",children:"Error"})]}),Object(k.jsx)("div",{children:Object(k.jsx)("button",{children:Object(k.jsx)("i",{class:"fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"})})})]}),Object(k.jsx)("div",{class:"px-10 py-5 text-gray-600",children:t}),Object(k.jsx)("div",{class:"px-5 py-4 flex justify-end",children:Object(k.jsx)("button",{onClick:this.closeModal,class:"text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150",children:"OK"})})]})})}):""})}}]),c}(s.Component),B=c(9),C=c.n(B),G=c(16),P=function(e){Object(E.a)(c,e);var t=Object(_.a)(c);function c(e){var s;return Object(g.a)(this,c),(s=t.call(this,e)).state={name:"",blogLink:"",jobTag:"",profileImage:""},s.state.name=s.props.name||"User",s.state.blogLink=s.props.blogLink||"http://harmony.seongrok.net",s.state.jobTag=s.props.jobTag||"1",s.state.profileImage=s.props.profileImage||"http://k.kakaocdn.net/dn/5b4p3/btqXfJNCwln/xkWdK3xaopQHiqj3kG3DZ0/img_640x640.jpg",s}return Object(w.a)(c,[{key:"render",value:function(){return Object(k.jsx)("div",{className:"w-full lg:w-72 h-56",children:Object(k.jsxs)("div",{class:"relative bg-white rounded-3xl py-6 px-6 my-4 shadow-xl",children:[Object(k.jsx)("div",{class:" text-white flex items-center absolute rounded-full shadow-xl bg-pink-500 left-4 -top-6 overflow-hidden",children:Object(k.jsx)("img",{src:this.state.profileImage,alt:"UserImage",className:"h-16 w-16"})}),Object(k.jsxs)("div",{class:"mt-8",children:[Object(k.jsx)("p",{class:"text-xl font-semibold my-2",children:this.state.name}),Object(k.jsxs)("div",{class:"flex space-x-2 text-gray-400 text-sm my-3",children:[Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(k.jsx)("path",{"fill-rule":"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z","clip-rule":"evenodd"})}),Object(k.jsx)("p",{className:"truncate",children:this.state.blogLink})]}),Object(k.jsx)("div",{class:"border-t-2"}),Object(k.jsx)("div",{class:"flex justify-between",children:Object(k.jsxs)("div",{class:"my-2",children:[Object(k.jsx)("p",{class:"font-semibold text-base mb-2",children:"\uc804\ubb38\ubd84\uc57c"}),Object(k.jsx)("td",{class:"text-center",children:Object(k.jsx)("span",{class:"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs",children:"BackEnd"})})]})})]})]})})}}]),c}(s.Component),D=function(e){Object(E.a)(c,e);var t=Object(_.a)(c);function c(e){return Object(g.a)(this,c),t.call(this,e)}return Object(w.a)(c,[{key:"render",value:function(){return Object(k.jsx)("div",{className:"w-full lg:w-72 h-56 animate-pulse",children:Object(k.jsxs)("div",{class:"relative bg-white rounded-3xl py-6 px-6 my-4 shadow-xl",children:[Object(k.jsx)("div",{class:" text-white flex items-center absolute rounded-full shadow-xl left-4 -top-6 overflow-hidden h-16 w-16 bg-gray-200"}),Object(k.jsxs)("div",{class:"mt-8",children:[Object(k.jsx)("div",{class:"h-6 bg-gray-200 rounded w-3/4"}),Object(k.jsxs)("div",{class:"flex space-x-2 text-gray-400 text-sm my-3",children:[Object(k.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(k.jsx)("path",{"fill-rule":"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z","clip-rule":"evenodd"})}),Object(k.jsx)("div",{class:"h-4 bg-gray-200 rounded w-3/4"})]}),Object(k.jsx)("div",{class:"border-t-2"}),Object(k.jsx)("div",{class:"flex justify-between",children:Object(k.jsxs)("div",{class:"my-2",children:[Object(k.jsx)("div",{class:"h-6 bg-gray-200 rounded w-14 my-2"}),Object(k.jsx)("div",{class:"h-4 bg-gray-200 rounded w-3/4"})]})})]})]})})}}]),c}(s.Component),F=function(e){Object(E.a)(c,e);var t=Object(_.a)(c);function c(e){var s;return Object(g.a)(this,c),(s=t.call(this,e)).state={pageLoading:!0},s}return Object(w.a)(c,[{key:"componentDidMount",value:function(){var e=Object(G.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){setTimeout(e,5e3)}));case 2:this.setState({pageLoading:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(k.jsxs)("div",{className:"min-h-screen bg-gray-50 justify-center",children:[Object(k.jsx)("div",{className:"flex flex-row justify-center lg:py-28",children:Object(k.jsx)("p",{className:"text-xl text-gray-700 lg:text-4xl pt-5",children:"\ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud558\uae30\uc804 \uc5b4\ub5a4 \uc0ac\ub78c\ub4e4\uc774 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694!"})}),this.state.pageLoading?Object(k.jsxs)("div",{className:"flex flex-col lg:flex-row flex-wrap justify-center mr-10 ml-10 lg:mr-28 lg:ml-28",children:[Object(k.jsx)("div",{className:"m-5",children:Object(k.jsx)(D,{})}),Object(k.jsx)("div",{className:"m-5",children:Object(k.jsx)(D,{})}),Object(k.jsx)("div",{className:"m-5",children:Object(k.jsx)(D,{})}),Object(k.jsx)("div",{className:"m-5",children:Object(k.jsx)(D,{})}),Object(k.jsx)("div",{className:"m-5",children:Object(k.jsx)(D,{})})]}):Object(k.jsxs)("div",{className:"flex flex-col lg:flex-row flex-wrap justify-center mr-10 ml-10 lg:mr-28 lg:ml-28",children:[Object(k.jsx)("div",{className:"m-5",children:Object(k.jsx)(P,{name:"test",blogLink:"test.com",jobTag:"1"})}),Object(k.jsx)("div",{className:"m-5",children:Object(k.jsx)(P,{name:"test",blogLink:"test.com",jobTag:"1"})}),Object(k.jsx)("div",{className:"m-5",children:Object(k.jsx)(P,{name:"test",blogLink:"test.com",jobTag:"1"})}),Object(k.jsx)("div",{className:"m-5",children:Object(k.jsx)(P,{name:"test",blogLink:"test.com",jobTag:"1"})})]})]})}}]),c}(s.Component),K=c(27),V=c.n(K),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"error",t=arguments.length>1?arguments[1]:void 0;return function(){var c=Object(G.a)(C.a.mark((function c(s,n){return C.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:s({type:"Service/ERROR_MODAL_OPEN",size:{msg:e,path:t}});case 1:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()};var H=Object(p.b)((function(e){return{APP_VERSION:e.APP_VERSION,TEST_VALUE:e.TEST_VALUE}}),(function(e){return{setTestValue:function(t){e(function(){var e=Object(G.a)(C.a.mark((function e(t,c){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"ServiceInformaion/SET_TEXT",size:"pong"});case 1:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}())},openErrorModal:function(t){e(X(t))}}}))(N);var J=Object(p.b)((function(e){return{USER_LOGIN:e.USER_LOGIN,USER_NAME:e.USER_NAME}}),(function(e){return{logout:function(){e(function(){var e=Object(G.a)(C.a.mark((function e(t,c){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"Service/LOGOUT",size:{}});case 1:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}())}}}))(S);var q=Object(p.b)((function(e){return{}}),(function(e){return{}}))(M);var W=Object(p.b)((function(e){return{}}),(function(e){return{}}))(I);var Y=Object(p.b)((function(e){return{}}),(function(e){return{getKakaoToken:function(t){e(function(e){return function(){var t=Object(G.a)(C.a.mark((function t(c,s){var n,r,a,l,i;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://r5fg3qi652.execute-api.ap-northeast-2.amazonaws.com/dev1/api/v1/kakao/authorize",t.prev=2,t.next=5,V.a.get("".concat("https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=dab58a800514cc429576cf0f84c83ab0&redirect_uri=http://harmony.seongrok.net/kakao/auth&code=").concat(e));case 5:r=t.sent,a=r.data.access_token,l=r.data.refresh_token,c({type:"Service/SET_TOKEN_INFO",size:{accessToken:a,refreshToken:l}}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),c(X("\uce74\uce74\uc624\ud1a1 \uc544\uc774\ub514 \uc815\ubcf4\ub97c \ub85c\ub4dc\ud558\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4 \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.","/"));case 14:return t.prev=14,console.log("".concat(n)),t.next=18,V.a.get("".concat(n),{headers:{userToken:s().ACCESS_TOKEN,userTokenType:"kakao"}});case 18:i=t.sent,c({type:"Service/SET_USER_INFO",size:{USER_ID:i.data.data.id,USER_JOBTAG:i.data.data.jobTag,USER_NAME:i.data.data.name,USER_PROFILE:i.data.data.profileImageUrl}}),window.location.pathname="/",t.next=26;break;case 23:t.prev=23,t.t1=t.catch(14),t.t1.response?c(X("\ud68c\uc6d0\ub4f1\ub85d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4","/signup")):t.t1.request?c(X("\uc11c\ube44\uc2a4\uac00 \uc624\ud504\ub77c\uc778 \uc0c1\ud0dc \uc785\ub2c8\ub2e4 \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.","/")):c(X("\uce74\uce74\uc624\ud1a1 \uc544\uc774\ub514 \uc815\ubcf4\ub97c \ub85c\ub4dc\ud558\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4 \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.","/"));case 26:case"end":return t.stop()}}),t,null,[[2,11],[14,23]])})));return function(e,c){return t.apply(this,arguments)}}()}(t))}}}))(A);var Q=Object(p.b)((function(e){return{}}),(function(e){return{}}))(z);var Z=Object(p.b)((function(e){return{ERROR_STATE:e.ERROR_STATE,ERROR_MSG:e.ERROR_MSG,ERROR_TARGET_PATH:e.ERROR_TARGET_PATH}}),(function(e){return{openErrorModal:function(t){e(X(t))},closeErrorModal:function(t){e(function(e){return function(){var t=Object(G.a)(C.a.mark((function t(c,s){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:"Service/ERROR_MODAL_CLOSE"}),void 0!=e&&(window.location.pathname=e);case 2:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()}(t))}}}))(U);var $=Object(p.b)((function(e){return{}}),(function(e){return{}}))(F),ee=(c(76),Object(x.b)(O));a.a.render(Object(k.jsx)(m.a,{basename:"/",children:Object(k.jsx)(p.a,{store:O,children:Object(k.jsx)(f.a,{loading:null,persistor:ee,children:Object(k.jsxs)(n.a.StrictMode,{children:[Object(k.jsx)(Z,{}),Object(k.jsxs)(v.a,{exact:!0,path:"/",children:[Object(k.jsx)(J,{}),Object(k.jsx)(q,{}),Object(k.jsx)(W,{})]}),Object(k.jsx)(v.a,{exact:!0,path:"/service/info",children:Object(k.jsx)(H,{})}),Object(k.jsx)(v.a,{exact:!0,path:"/kakao/auth",children:Object(k.jsx)(Y,{})}),Object(k.jsxs)(v.a,{exact:!0,path:"/signup",children:[Object(k.jsx)(J,{}),Object(k.jsx)(Q,{}),Object(k.jsx)(W,{})]}),Object(k.jsxs)(v.a,{exact:!0,path:"/userlist",children:[Object(k.jsx)(J,{}),Object(k.jsx)($,{}),Object(k.jsx)(W,{})]})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[78,1,2]]]);
//# sourceMappingURL=main.d908724e.chunk.js.map