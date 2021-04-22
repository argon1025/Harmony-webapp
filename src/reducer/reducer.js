const initState = {
  APP_VERSION: "0.1",
  TEST_VALUE: 0,

  USER_LOGIN: false,
  USER_ID: "",
  USER_JOBTAG: "",
  USER_NAME: "",
  USER_PROFILE: "",
  USER_LOGIN_TYPE: "",

  ERROR_STATE: true,
  ERROR_MSG: "",
};

const reducer = (state = initState, action) => {
  console.log(state);
  console.log(action);
  // 액션 처리
  switch (action.type) {
    case "ServiceInformaion/SET_TEXT":
      return { ...state, TEST_VALUE: action.size };
    case "Service/ERROR_MODAL_OPEN":
      return { ...state, ERROR_MSG: action.size, ERROR_STATE: true };
    case "Service/ERROR_MODAL_CLOSE":
      return { ...state, ERROR_MSG: "", ERROR_STATE: false };
    default:
      return state;
  }
};
export default reducer;
