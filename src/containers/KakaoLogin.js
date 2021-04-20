import { GetKakaoTokenComponent } from "../components";
import { connect } from "react-redux";
import * as RESTAPI from "../action/RESTAPI";

function reduxStateToReactProps(state) {
  // 리덕스 스토어 상태를 전달
  return {};
}
function reduxDispatchToReactProps(dispatch) {
  // dispatch 메서드를 전달
  return {
    getKakaoToken: (kakaoCode) => {
      dispatch(RESTAPI.getKakaoToken(kakaoCode));
    },
  };
}

export default connect(
  reduxStateToReactProps,
  reduxDispatchToReactProps
)(GetKakaoTokenComponent);
