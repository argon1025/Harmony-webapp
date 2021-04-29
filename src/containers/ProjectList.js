import { projectListComponent } from "../components";
import { connect } from "react-redux";

// Import Action
import * as RESTAPI from "../action/RESTAPI";
import * as modal from "../action/modal";

function reduxStateToReactProps(state) {
  // 리덕스 스토어 상태를 전달
  return {
  };
}
function reduxDispatchToReactProps(dispatch) {
  // dispatch 메서드를 전달
  return {
    openErrorModal:(error)=>{
      dispatch(modal.openErrorMessage(error));
    },
  };
}

export default connect(
  reduxStateToReactProps,
  reduxDispatchToReactProps
)(projectListComponent);
