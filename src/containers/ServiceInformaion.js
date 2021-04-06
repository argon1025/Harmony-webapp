import { ServiceInformaionComponent } from "../components";
import { connect } from "react-redux";

function reduxStateToReactProps(state) {
  // 리덕스 스토어 상태를 전달
  return {
    APP_VERSION: state.APP_VERSION,
    TEST_VALUE: state.TEST_VALUE,
  }; 
}
function reduxDispatchToReactProps(dispatch) {
  // dispatch 메서드를 전달
  return {
    ping: (text) => {
      dispatch({ type: "ServiceInformaion/SET_TEXT", size: text });
    },
  };
}

export default connect(
  reduxStateToReactProps,
  reduxDispatchToReactProps
)(ServiceInformaionComponent);
