import { createStore } from "redux";

export default createStore((state, action) => {
  console.log(state);
  console.log(action);
  if (state === undefined) {
    return {
      version: 1,
      testvalue: 0,
    };
  }

  if (action.type === "ServiceInformaion/SET_TEXT") {
    return { ...state, testvalue: action.size };
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
