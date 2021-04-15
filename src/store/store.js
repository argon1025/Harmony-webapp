import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';

export default createStore((state, action) => {
  console.log(state);
  console.log(action);

  // Store 초기 데이터 설정
  if (state === undefined) {
    return {
      APP_VERSION: "0.1",
      TEST_VALUE: 0,

      USER_LOGIN: false,
      USER_ID: "",
      USER_JOBTAG: "",
      USER_NAME: "",
      USER_PROFILE: "",
      USER_LOGIN_TYPE: "",

      ERROR_STATE: false,
      ERROR_MSG: "",
    };
  }

  // 액션 처리
  switch (action.type) {
    case "ServiceInformaion/SET_TEXT":
      return { ...state, TEST_VALUE: action.size };
    default:
      break;
  }

  return state;
},applyMiddleware(ReduxThunk));
