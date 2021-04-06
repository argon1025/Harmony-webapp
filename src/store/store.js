import { createStore } from "redux";

export default createStore((state, action) => {
  console.log(state);
  console.log(action);
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

  if (action.type === "ServiceInformaion/SET_TEXT") {
    return { ...state, TEST_VALUE: action.size };
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
