(this["webpackJsonpharmony-webapp"]=this["webpackJsonpharmony-webapp"]||[]).push([[0],{76:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(22),s=c.n(a),o=c(15),l=c(40),i=c(13),d={APP_VERSION:"0.1",TEST_VALUE:0,ACCESS_TOKEN:"",REFRESH_TOKEN:"",USER_LOGIN:!1,USER_ID:"",USER_JOBTAG:"",USER_NAME:"",USER_PROFILE:"",USER_LOGIN_TYPE:"",ERROR_STATE:!0,ERROR_MSG:"",ERROR_TARGET_PATH:""},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(console.log(e),console.log(t),t.type){case"ServiceInformaion/SET_TEXT":return Object(i.a)(Object(i.a)({},e),{},{TEST_VALUE:t.size});case"Service/ERROR_MODAL_OPEN":return Object(i.a)(Object(i.a)({},e),{},{ERROR_MSG:t.size.msg,ERROR_STATE:!0,ERROR_TARGET_PATH:t.size.path});case"Service/ERROR_MODAL_CLOSE":return Object(i.a)(Object(i.a)({},e),{},{ERROR_MSG:"",ERROR_STATE:!1});case"Service/SET_TOKEN_INFO":return Object(i.a)(Object(i.a)({},e),{},{ACCESS_TOKEN:t.size.accessToken,REFRESH_TOKEN:t.size.refreshToken});case"Service/SET_USER_INFO":return Object(i.a)(Object(i.a)({},e),{},{USER_LOGIN:!0,USER_ID:t.size.userID,USER_JOBTAG:t.size.jobTag,USER_NAME:t.size.name,USER_PROFILE:t.size.profileImageUrl,USER_LOGIN_TYPE:"kakao"});default:return e}},x=c(24),u=c(42),b={key:"root",storage:c.n(u).a},O=Object(x.a)(b,j),h=Object(o.d)(O,Object(o.a)(l.a)),p=c(4);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=c(43),m=c(44),v=c(2),E=c(5),g=c(6),R=c(16),k=c(8),y=c(7),w=c(0),S=c(31),T=function(e){Object(k.a)(c,e);var t=Object(y.a)(c);function c(e){var r;return Object(E.a)(this,c),(r=t.call(this,e)).state={parsed:{}},r.state.parsed=S.parse(window.location.search),console.log(r.state.parsed),r.clickSetTestValueButton=r.clickSetTestValueButton.bind(Object(R.a)(r)),r.clickOpenErrorModalButton=r.clickOpenErrorModalButton.bind(Object(R.a)(r)),r}return Object(g.a)(c,[{key:"clickGoToIndexButton",value:function(){window.location.pathname="/"}},{key:"clickSetTestValueButton",value:function(){this.props.setTestValue("pong!")}},{key:"clickOpenErrorModalButton",value:function(){this.props.openErrorModal("\ud14c\uc2a4\ud2b8 \ud14c\uc2a4\ud2b8 \ud14c\uc2a4\ud2b8")}},{key:"render",value:function(){return Object(w.jsxs)("div",{className:"m-6",children:[Object(w.jsx)("h1",{className:"text-4xl",children:"service Info"}),Object(w.jsxs)("h2",{className:"text-xl",children:["service version : ",this.props.APP_VERSION]}),Object(w.jsx)("button",{className:"bg-red-500 hover:bg-red-700 rounded-lg p-1 m-1 text-white",onClick:this.clickGoToIndexButton,children:"go to index"}),Object(w.jsx)("button",{className:"bg-red-500 hover:bg-red-700 rounded-lg p-1 m-1 text-white",onClick:this.clickSetTestValueButton,children:"ping!"}),Object(w.jsx)("button",{className:"bg-red-500 hover:bg-red-700 rounded-lg p-1 m-1 text-white",onClick:this.clickOpenErrorModalButton,children:"openErrorModal"}),Object(w.jsx)("p",{children:this.props.TEST_VALUE}),Object(w.jsxs)("div",{children:["Icons made by ",Object(w.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," from ",Object(w.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(w.jsx)("a",{href:"https://www.freepik.com/vectors/school",children:"School vector created by pch.vector - www.freepik.com"})]})}}]),c}(r.Component),A=function(e){Object(k.a)(c,e);var t=Object(y.a)(c);function c(e){return Object(E.a)(this,c),t.call(this,e)}return Object(g.a)(c,[{key:"render",value:function(){return Object(w.jsxs)("div",{className:"bg-gray-50",children:[Object(w.jsxs)("div",{className:"flex lg:flex-row flex-col p-3",children:[Object(w.jsxs)("div",{className:"flex flex-auto flex-row justify-center pt-2",children:[Object(w.jsx)("svg",{className:"fill-current text-gray-700 text-2xl w-6 h-6",viewBox:"0 0 510 510",xmlns:"http://www.w3.org/2000/svg",children:Object(w.jsxs)("g",{id:"XMLID_131_",children:[Object(w.jsx)("path",{id:"XMLID_133_",d:"m310.37 36.901c-9.066-21.65-30.468-36.901-55.37-36.901s-46.304 15.252-55.37 36.901c17.721-4.501 36.269-6.901 55.37-6.901s37.649 2.4 55.37 6.901z"}),Object(w.jsx)("path",{id:"XMLID_135_",d:"m199.63 473.099c9.066 21.65 30.468 36.901 55.37 36.901s46.304-15.251 55.37-36.901c-17.721 4.501-36.269 6.901-55.37 6.901s-37.649-2.4-55.37-6.901z"}),Object(w.jsx)("path",{id:"XMLID_274_",d:"m473.099 199.63c4.501 17.72 6.901 36.269 6.901 55.37s-2.4 37.649-6.901 55.37c21.65-9.066 36.901-30.468 36.901-55.37s-15.251-46.304-36.901-55.37z"}),Object(w.jsx)("path",{id:"XMLID_297_",d:"m0 255c0 24.902 15.251 46.304 36.901 55.37-4.5-17.72-6.901-36.269-6.901-55.37s2.401-37.65 6.901-55.37c-21.65 9.066-36.901 30.468-36.901 55.37z"}),Object(w.jsx)("path",{id:"XMLID_298_",d:"m392.886 57.114c-8.006 0-15.772 1.558-22.953 4.529 32.183 19.202 59.19 46.204 78.399 78.382 8.949-21.738 4.614-47.704-13.019-65.338-11.334-11.332-26.401-17.573-42.427-17.573z"}),Object(w.jsx)("path",{id:"XMLID_310_",d:"m369.975 448.332c7.318 3.013 15.113 4.526 22.911 4.526 15.364 0 30.729-5.849 42.427-17.545 17.633-17.634 21.968-43.6 13.019-65.338-19.201 32.164-46.193 59.156-78.357 78.357z"}),Object(w.jsx)("path",{id:"XMLID_327_",d:"m140.025 61.668c-21.738-8.949-47.704-4.614-65.337 13.02-17.633 17.633-21.968 43.599-13.019 65.337 19.2-32.164 46.192-59.156 78.356-78.357z"}),Object(w.jsx)("circle",{id:"XMLID_328_",cx:"255",cy:"255",r:"90"}),Object(w.jsx)("path",{id:"XMLID_331_",d:"m450 255c0-107.523-87.477-195-195-195s-195 87.477-195 195 87.477 195 195 195 195-87.477 195-195zm-315 0c0-66.169 53.831-120 120-120s120 53.831 120 120c0 66.168-53.832 120-120 120s-120-53.832-120-120z"})]})}),Object(w.jsx)("p",{className:"text-2xl font-semibold text-gray-700",children:" Harmony"})]}),Object(w.jsxs)("div",{className:"flex-auto flex justify-center pt-3",children:[Object(w.jsx)("a",{className:"text-base text-gray-700 pr-4",href:"/",children:"\ud30c\ud2b8\ub108 \ucc3e\uae30"}),Object(w.jsx)("a",{className:"text-base text-gray-700 pr-4",href:"/",children:"\ud504\ub85c\uc81d\ud2b8 \ucc3e\uae30"}),Object(w.jsx)("a",{className:"text-base text-gray-700",href:"/",children:"\ud504\ub85c\uc81d\ud2b8 \ub4f1\ub85d"})]}),Object(w.jsx)("div",{className:"flex-auto flex justify-center",children:this.props.USER_LOGIN?Object(w.jsx)("div",{children:Object(w.jsxs)("p",{className:"text-sm text-gray-700 pt-3",children:[this.props.USER_NAME,"\ub2d8 \uc548\ub155\ud558\uc138\uc694"]})}):Object(w.jsx)("div",{children:Object(w.jsx)("a",{href:"https://kauth.kakao.com/oauth/authorize?client_id=dab58a800514cc429576cf0f84c83ab0&redirect_uri=http://harmony.seongrok.net/kakao/auth&response_type=code",children:Object(w.jsx)("img",{src:"data:image/png;base64,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",alt:"kakao_login"})})})})]}),Object(w.jsx)("hr",{})]})}}]),c}(r.Component),N=c.p+"static/media/MainIntroIMG.756755c1.png",I=function(e){Object(k.a)(c,e);var t=Object(y.a)(c);function c(e){return Object(E.a)(this,c),t.call(this,e)}return Object(g.a)(c,[{key:"render",value:function(){return Object(w.jsxs)("div",{className:"motion-safe:animate-fadeIn min-h-screen pattern",children:[Object(w.jsx)("div",{className:"flex flex-row justify-center",children:Object(w.jsx)("p",{className:"text-xl text-gray-700 lg:text-4xl pt-5",children:"\uc88b\uc740 \uc0ac\ub78c\ub4e4\uacfc \ud568\uaed8 \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud558\uc138\uc694!"})}),Object(w.jsx)("div",{children:Object(w.jsx)("img",{src:N,alt:"MainIntroIMG"})})]})}}]),c}(r.Component),C=function(e){Object(k.a)(c,e);var t=Object(y.a)(c);function c(e){return Object(E.a)(this,c),t.call(this,e)}return Object(g.a)(c,[{key:"render",value:function(){return Object(w.jsxs)("div",{className:"flex flex-col justify-center lg:flex-row h-20 bg-gray-100 mb-1 pt-5",children:[Object(w.jsx)("div",{className:"flex justify-center",children:Object(w.jsx)("p",{className:"text-gray-700 text-4xl font-bold mr-5",children:"Harmony"})}),Object(w.jsxs)("div",{className:"flex flex-col",children:[Object(w.jsx)("p",{className:"text-xs text-gray-300 lg:text-left text-center",children:"\u24d2 2021. SeongrokLEE All Rights Reserved"}),Object(w.jsx)("p",{className:"text-xs text-gray-300 lg:text-left text-center",children:"Icons made by Freepik from www.flaticon.com"}),Object(w.jsx)("p",{className:"text-xs text-gray-300 lg:text-left text-center",children:"School vector created by pch.vector - www.freepik.com"})]})]})}}]),c}(r.Component),M=c(31),L=function(e){Object(k.a)(c,e);var t=Object(y.a)(c);function c(e){var r;return Object(E.a)(this,c),(r=t.call(this,e)).state={parsed:{}},r.state.parsed=M.parse(window.location.search),console.log(r.state.parsed),r}return Object(g.a)(c,[{key:"componentDidMount",value:function(){this.props.getKakaoToken(this.state.parsed.code)}},{key:"render",value:function(){return Object(w.jsxs)("div",{className:"",children:["Login... Code = ",this.state.parsed.code]})}}]),c}(r.Component),_=function(e){Object(k.a)(c,e);var t=Object(y.a)(c);function c(e){return Object(E.a)(this,c),t.call(this,e)}return Object(g.a)(c,[{key:"render",value:function(){return Object(w.jsx)("div",{className:"flex bg-gray-50 min-h-screen justify-center",children:Object(w.jsxs)("div",{className:"flex flex-col w-screen border-gray-600 m-6 lg:w-96",children:[Object(w.jsx)("h1",{className:"text-3xl font-semibold text-gray-600",children:"SignUp"}),Object(w.jsx)("h2",{className:"mt-6 text-gray-600 text-base font-semibold",children:"GitPage \ub610\ub294 \ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc0ac\uc774\ud2b8 \ub9c1\ud06c"}),Object(w.jsxs)("div",{className:"relative mt-3",children:[Object(w.jsx)("div",{className:"absolute flex border border-transparent left-0 top-0 h-full w-10",children:Object(w.jsx)("div",{className:"flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full",children:Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:Object(w.jsx)("path",{"fill-rule":"evenodd",d:"M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z","clip-rule":"evenodd"})})})}),Object(w.jsx)("input",{name:"blogUrl",type:"text",placeholder:"http://harmony.github.io",className:"text-sm sm:text-base relative w-full border rounded placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"})]}),Object(w.jsx)("h2",{className:"mt-3 text-gray-600 text-base font-semibold",children:"\ud76c\ub9dd \ubd84\uc57c"}),Object(w.jsxs)("div",{className:"flex flex-row",children:[Object(w.jsxs)("label",{class:"inline-flex items-center",children:[Object(w.jsx)("input",{type:"radio",name:"jobs",class:"form-checkbox text-green-500"}),Object(w.jsx)("td",{class:"px-2 text-center",children:Object(w.jsx)("span",{class:"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs",children:"BackEnd"})})]}),Object(w.jsxs)("label",{class:"inline-flex items-center",children:[Object(w.jsx)("input",{type:"radio",name:"jobs",class:"form-checkbox text-green-500"}),Object(w.jsx)("td",{class:"px-2 text-center",children:Object(w.jsx)("span",{class:"bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs",children:"FrontEnd"})})]}),Object(w.jsxs)("label",{class:"inline-flex items-center",children:[Object(w.jsx)("input",{type:"radio",name:"jobs",class:"form-checkbox text-green-500"}),Object(w.jsx)("td",{class:"px-2 text-center",children:Object(w.jsx)("span",{class:"bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs",children:"Design"})})]})]}),Object(w.jsx)("div",{class:"mt-6",children:Object(w.jsx)("button",{type:"button",class:"w-full focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-green-500 hover:bg-green-600 hover:shadow-lg",children:"SignUp"})})]})})}}]),c}(r.Component),F=function(e){Object(k.a)(c,e);var t=Object(y.a)(c);function c(e){var r;return Object(E.a)(this,c),(r=t.call(this,e)).closeModal=r.closeModal.bind(Object(R.a)(r)),r}return Object(g.a)(c,[{key:"closeModal",value:function(){console.log("close Error Modal"),this.props.closeErrorModal(this.props.ERROR_TARGET_PATH)}},{key:"render",value:function(){var e=this.props.ERROR_STATE,t=this.props.ERROR_MSG;return Object(w.jsx)("div",{children:e?Object(w.jsx)("div",{className:"flex fixed h-full w-full items-center justify-center bg-black bg-opacity-75 z-50",children:Object(w.jsx)("div",{class:"absolute",children:Object(w.jsxs)("div",{class:"rounded-lg shadow-lg bg-white my-3",children:[Object(w.jsxs)("div",{class:"flex justify-between border-b border-gray-100 px-5 py-4",children:[Object(w.jsxs)("div",{className:"flex flex-row inline-block align-middle",children:[Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-red-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(w.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})}),Object(w.jsx)("span",{class:"font-bold text-gray-700 text-lg",children:"Error"})]}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{children:Object(w.jsx)("i",{class:"fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"})})})]}),Object(w.jsx)("div",{class:"px-10 py-5 text-gray-600",children:t}),Object(w.jsx)("div",{class:"px-5 py-4 flex justify-end",children:Object(w.jsx)("button",{onClick:this.closeModal,class:"text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150",children:"OK"})})]})})}):""})}}]),c}(r.Component),z=c(14),U=c.n(z),X=c(19),G=c(27),P=c.n(G),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"error",t=arguments.length>1?arguments[1]:void 0;return function(){var c=Object(X.a)(U.a.mark((function c(r,n){return U.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:r({type:"Service/ERROR_MODAL_OPEN",size:{msg:e,path:t}});case 1:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()};var V=Object(p.b)((function(e){return{APP_VERSION:e.APP_VERSION,TEST_VALUE:e.TEST_VALUE}}),(function(e){return{setTestValue:function(t){e(function(){var e=Object(X.a)(U.a.mark((function e(t,c){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"ServiceInformaion/SET_TEXT",size:"pong"});case 1:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}())},openErrorModal:function(t){e(D(t))}}}))(T);var J=Object(p.b)((function(e){return{USER_LOGIN:e.USER_LOGIN,USER_NAME:e.USER_NAME}}),(function(e){return{}}))(A);var K=Object(p.b)((function(e){return{}}),(function(e){return{}}))(I);var H=Object(p.b)((function(e){return{}}),(function(e){return{}}))(C);var Z=Object(p.b)((function(e){return{}}),(function(e){return{getKakaoToken:function(t){e(function(e){return function(){var t=Object(X.a)(U.a.mark((function t(c,r){var n,a,s,o,l;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://r5fg3qi652.execute-api.ap-northeast-2.amazonaws.com/dev1/api/v1/kakao/authorize",t.prev=2,t.next=5,P.a.get("".concat("https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=dab58a800514cc429576cf0f84c83ab0&redirect_uri=http://harmony.seongrok.net/kakao/auth&code=").concat(e));case 5:a=t.sent,console.log(a),s=a.data.access_token,o=a.data.refresh_token,c({type:"Service/SET_TOKEN_INFO",size:{accessToken:s,refreshToken:o}}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),c(D("\uce74\uce74\uc624\ud1a1 \uc544\uc774\ub514 \uc815\ubcf4\ub97c \ub85c\ub4dc\ud558\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4 \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.","/"));case 15:return t.prev=15,t.next=18,P.a.get("".concat(n),{headers:{"Content-Type":"application/x-www-form-urlencoded",Accept:"application/json",userToken:r().ACCESS_TOKEN}});case 18:l=t.sent,console.log(l),c({type:"Service/SET_USER_INFO",size:{USER_ID:l.data.id,USER_JOBTAG:l.data.jobTag,USER_NAME:l.data.name,USER_PROFILE:l.data.profileImageUrl}}),t.next=27;break;case 23:t.prev=23,t.t1=t.catch(15),console.log(t.t1),t.t1.response?c(D("\ud68c\uc6d0\ub4f1\ub85d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4","/signup")):t.t1.request?c(D("\uc11c\ube44\uc2a4\uac00 \uc624\ud504\ub77c\uc778 \uc0c1\ud0dc \uc785\ub2c8\ub2e4 \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.","/")):c(D("\uce74\uce74\uc624\ud1a1 \uc544\uc774\ub514 \uc815\ubcf4\ub97c \ub85c\ub4dc\ud558\ub294\ub370 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4 \uc7a0\uc2dc\ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.","/"));case 27:case"end":return t.stop()}}),t,null,[[2,12],[15,23]])})));return function(e,c){return t.apply(this,arguments)}}()}(t))}}}))(L);var B=Object(p.b)((function(e){return{}}),(function(e){return{}}))(_);var W=Object(p.b)((function(e){return{ERROR_STATE:e.ERROR_STATE,ERROR_MSG:e.ERROR_MSG,ERROR_TARGET_PATH:e.ERROR_TARGET_PATH}}),(function(e){return{openErrorModal:function(t){e(D(t))},closeErrorModal:function(t){e(function(e){return function(){var t=Object(X.a)(U.a.mark((function t(c,r){return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:"Service/ERROR_MODAL_CLOSE"}),void 0!=e&&(window.location.pathname=e);case 2:case"end":return t.stop()}}),t)})));return function(e,c){return t.apply(this,arguments)}}()}(t))}}}))(F),Y=(c(76),Object(x.b)(h));s.a.render(Object(w.jsx)(m.a,{basename:"/",children:Object(w.jsx)(p.a,{store:h,children:Object(w.jsx)(f.a,{loading:null,persistor:Y,children:Object(w.jsxs)(n.a.StrictMode,{children:[Object(w.jsx)(W,{}),Object(w.jsxs)(v.a,{exact:!0,path:"/",children:[Object(w.jsx)(J,{}),Object(w.jsx)(K,{}),Object(w.jsx)(H,{})]}),Object(w.jsx)(v.a,{exact:!0,path:"/service/info",children:Object(w.jsx)(V,{})}),Object(w.jsx)(v.a,{exact:!0,path:"/kakao/auth",children:Object(w.jsx)(Z,{})}),Object(w.jsxs)(v.a,{exact:!0,path:"/signup",children:[Object(w.jsx)(J,{}),Object(w.jsx)(B,{}),Object(w.jsx)(H,{})]})]})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[78,1,2]]]);
//# sourceMappingURL=main.5d4ad500.chunk.js.map