import { ServiceInformaionComponent } from "../components";
import { connect } from "react-redux";

// Import Action
import * as RESTAPI from "../action/RESTAPI";
import * as modal from "../action/modal";

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
    setTestValue: (text) => {
      dispatch(RESTAPI.setTestValue(text));
    },
    openErrorModal:(error)=>{
      dispatch(modal.openErrorMessage(error));
    },
  };
}

export default connect(
  reduxStateToReactProps,
  reduxDispatchToReactProps
)(ServiceInformaionComponent);
