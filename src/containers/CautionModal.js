import { CautionModalComponent } from "../components";
import { connect } from "react-redux";
import * as modal from "../action/modal";

function reduxStateToReactProps(state) {
  // 리덕스 스토어 상태를 전달
  return {
    ERROR_STATE: state.ERROR_STATE,
    ERROR_MSG: state.ERROR_MSG,
    ERROR_TARGET_PATH: state.ERROR_TARGET_PATH,
  };
}
function reduxDispatchToReactProps(dispatch) {
  // dispatch 메서드를 전달
  return {
    openErrorModal:(error)=>{
      dispatch(modal.openErrorMessage(error));
    },
    closeErrorModal:(path)=>{
      dispatch(modal.closeErrorMessage(path));
    }
  };
}

export default connect(
  reduxStateToReactProps,
  reduxDispatchToReactProps
)(CautionModalComponent);
