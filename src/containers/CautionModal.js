import { CautionModalComponent } from "../components";
import { connect } from "react-redux";
import * as modal from "../action/modal";

function reduxStateToReactProps(state) {
  // 리덕스 스토어 상태를 전달
  return {
    ERROR_STATE: state.ERROR_STATE,
    ERROR_MSG: state.ERROR_MSG,
  };
}
function reduxDispatchToReactProps(dispatch) {
  // dispatch 메서드를 전달
  return {
    openErrorModal:(error)=>{
      dispatch(modal.openErrorMessage(error));
    },
    closeErrorModal:()=>{
      dispatch(modal.closeErrorMessage());
    }
  };
}

export default connect(
  reduxStateToReactProps,
  reduxDispatchToReactProps
)(CautionModalComponent);
