const initState = {
  APP_VERSION: "0.1",
  TEST_VALUE: 0,

  ACCESS_TOKEN: "",
  REFRESH_TOKEN: "",

  USER_LOGIN: false,
  USER_ID: "",
  USER_JOBTAG: "",
  USER_NAME: "",
  USER_PROFILE: "",
  USER_LOGIN_TYPE: "",

  ERROR_STATE: false,
  ERROR_MSG: "",
  ERROR_TARGET_PATH: "",
};

const reducer = (state = initState, action) => {
  console.log(state);
  console.log(action);
  // 액션 처리
  switch (action.type) {
    case "ServiceInformaion/SET_TEXT":
      return { ...state, TEST_VALUE: action.size };
    case "Service/ERROR_MODAL_OPEN":
      return {
        ...state,
        ERROR_MSG: action.size.msg,
        ERROR_STATE: true,
        ERROR_TARGET_PATH: action.size.path,
      };
    case "Service/ERROR_MODAL_CLOSE":
      return { ...state, ERROR_MSG: "", ERROR_STATE: false };
    case "Service/SET_TOKEN_INFO":
      return {
        ...state,
        ACCESS_TOKEN: action.size.accessToken,
        REFRESH_TOKEN: action.size.refreshToken,
      };
    case "Service/SET_USER_INFO":
      return {
        ...state,
        USER_LOGIN: true,
        USER_ID: action.size.USER_ID,
        USER_JOBTAG: action.size.USER_JOBTAG,
        USER_NAME: action.size.USER_NAME,
        USER_PROFILE: action.size.USER_PROFILE,
        USER_LOGIN_TYPE: "kakao",
      };
    default:
      return state;
  }
};
export default reducer;
