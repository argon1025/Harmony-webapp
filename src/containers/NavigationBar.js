import { NavigationBarComponent } from "../components";
import { connect } from "react-redux";

function reduxStateToReactProps(state) {
  // 리덕스 스토어 상태를 전달
  return {
    version: state.version,
    testvalue: state.testvalue,
  };
}
function reduxDispatchToReactProps(dispatch) {
  // dispatch 메서드를 전달
  return {
  };
}

export default connect(
  reduxStateToReactProps,
  reduxDispatchToReactProps
)(NavigationBarComponent);
