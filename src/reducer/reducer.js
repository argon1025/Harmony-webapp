const initState = {
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

const reducer = (state = initState, action) => {
    // 액션 처리
    switch (action.type) {
      case "ServiceInformaion/SET_TEXT":
        return { ...state, TEST_VALUE: action.size };
      default:
        return state;
    }
  };
export default reducer;
