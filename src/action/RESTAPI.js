/**
 * Action
 *
 * Redux 에서 상태에 변화가 필요할때 발생되는 액션
 */
import Axios from "axios";
import * as modal from "../action/modal";

export const setTestValue = (testValue) => async (dispatch, getState) => {
  dispatch({ type: "ServiceInformaion/SET_TEXT", size: "pong" });
};

//인가코드를 이용해서 카카오 토큰정보를 로드
export const getKakaoToken = (kakaoCode) => async (dispatch, getState) => {
  const KAKAO_URL_HOST =
    "https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=dab58a800514cc429576cf0f84c83ab0&redirect_uri=http://harmony.seongrok.net/kakao/auth&code=";
  const HARMONY_URL_HOST =
    "https://r5fg3qi652.execute-api.ap-northeast-2.amazonaws.com/dev1/api/v1/kakao/authorize";
  try {
    //카카오 서버로부터 토큰 로드
    const result = await Axios.get(`${KAKAO_URL_HOST}${kakaoCode}`);

    // 사용자 정보 콘솔화면 표시
    //console.log(result);

    // 토큰정보 스토어 적재
    const accessToken = result.data.access_token;
    const refreshToken = result.data.refresh_token;
    dispatch({
      type: "Service/SET_TOKEN_INFO",
      size: { accessToken: accessToken, refreshToken: refreshToken },
    });
  } catch (error) {
    //콘솔 에러 출력
    //console.log(error.response);
    dispatch(
      modal.openErrorMessage(
        "카카오톡 아이디 정보를 로드하는데 실패했습니다 잠시후 다시 시도해 주세요.",
        "/"
      )
    );
  }
  try {
    // 하모니 서버에 가입유무 확인
    //console.log(`${getState().ACCESS_TOKEN} --------> 가입확인`)
    console.log(`${HARMONY_URL_HOST}`);
    const result = await Axios.get(`${HARMONY_URL_HOST}`, {
      headers: {
        userToken: getState().ACCESS_TOKEN,
        userTokenType: "kakao",
      },
    });
    //회원 데이터 출력
    //console.log(result);
    dispatch({
      type: "Service/SET_USER_INFO",
      size: {
        USER_ID: result.data.data.id,
        USER_JOBTAG: result.data.data.jobTag,
        USER_NAME: result.data.data.name,
        USER_PROFILE: result.data.data.profileImageUrl,
      },
    });

    //로그인 성공후에 메인 페이지로 이동
    window.location.pathname = "/";
  } catch (error) {
    //콘솔 에러 출력
    //console.log(error);
    if (error.response) {
      // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
      //console.log(error.response.data); // 서버응답
      //console.log(error.response.status); //400
      //console.log(error.response.headers);
      dispatch(modal.openErrorMessage("회원등록이 필요합니다", "/signup"));
    } else if (error.request) {
      // 요청이 이루어 졌으나 응답을 받지 못했습니다.
      // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
      // Node.js의 http.ClientRequest 인스턴스입니다.
      //console.log(error.request);
      dispatch(
        modal.openErrorMessage(
          "서비스가 오프라인 상태 입니다 잠시후 다시 시도해 주세요.",
          "/"
        )
      );
    } else {
      dispatch(
        modal.openErrorMessage(
          "카카오톡 아이디 정보를 로드하는데 실패했습니다 잠시후 다시 시도해 주세요.",
          "/"
        )
      );
    }
  }
};

// 카카오 토큰 정보를 이용한 회원가입 요청
export const signUpUser = (blogLink,jobTag) => async (dispatch, getState) => {
  const HARMONY_URL_HOST =
  "https://r5fg3qi652.execute-api.ap-northeast-2.amazonaws.com/dev1/api/v1/kakao/account";

  try {
    const result = await Axios.post(`${HARMONY_URL_HOST}`, {
      "blogLink": `${blogLink}`,
      "jobTag": `${jobTag}`,
    },{
      headers: {
        userToken: getState().ACCESS_TOKEN,
        userTokenType: "kakao",
      },
    });
    console.log(result);
    dispatch(modal.openErrorMessage("회원가입에 성공했습니다!", "/"));
  } catch (error) {
    console.log(error.response.data); // 서버응답
    console.log(error.response.status); //400
    console.log(error.response.headers);
    dispatch(modal.openErrorMessage("회원가입에 실패했습니다, 허용된 문자만 입력해 주세요."));
  }
}

// 프로젝트 생성 요청
export const createProject = (title,content) => async (dispatch,getState) => {
  const HARMONY_URL_HOST =
  "https://r5fg3qi652.execute-api.ap-northeast-2.amazonaws.com/dev1/api/v1/projects";

  try {
    const result = await Axios.post(`${HARMONY_URL_HOST}`, {
      "title": `${title}`,
      "content": `${content}`,
    },{
      headers: {
        userToken: getState().ACCESS_TOKEN,
        userTokenType: "kakao",
        userid: getState().USER_ID,
      },
    });
    console.log(result);
    dispatch(modal.openErrorMessage("프로젝트를 생성하는데 성공했습니다", "/projectlist"));
  } catch (error) {
    console.log(error.response.data); // 서버응답
    console.log(error.response.status); //400
    console.log(error.response.headers);
    dispatch(modal.openErrorMessage("유저정보가 올바르지 않거나 금지된 문자열이 포함되어 있습니다."));
  }
}