/**
 * Action
 * 
 * Redux 에서 상태에 변화가 필요할때 발생되는 액션
 */
import Axios from "axios";
import * as modal from "../action/modal";

export const setTestValue = (testValue) => async (dispatch, getState) => {
    dispatch({ type: "ServiceInformaion/SET_TEXT", size: "pong" });
}

//인가코드를 이용해서 카카오 토큰정보를 로드
export const getKakaoToken = (kakaoCode) => async (dispatch, getState) => {
    const KAKAO_URL_HOST = "https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=dab58a800514cc429576cf0f84c83ab0&redirect_uri=http://harmony.seongrok.net/kakao/auth&code=";
    const HARMONY_URL_HOST = "https://r5fg3qi652.execute-api.ap-northeast-2.amazonaws.com/dev1/api/v1/kakao/authorize"
    try {
        //카카오 서버로부터 토큰 로드
        const result = await Axios.get(`${KAKAO_URL_HOST}${kakaoCode}`);
        console.log(result);

        // 토큰정보 스토어 적재
        const accessToken = result.data.access_token;
        const refreshToken = result.data.refresh_token;
        dispatch({type:"Service/SET_TOKEN_INFO",size:{accessToken:accessToken,refreshToken:refreshToken}});

    } catch (error) {
        //console.log(error.response);
        dispatch(modal.openErrorMessage("카카오톡 아이디 정보를 로드하는데 실패했습니다.","/"));
    }
    try {
        console.log(`${getState().ACCESS_TOKEN} --------> 가입확인`)
        //const harmonyResult = await Axios.get(`${HARMONY_URL_HOST}${accessToken}`);
    } catch (error) {
        dispatch(modal.openErrorMessage("카카오톡 아이디 정보를 로드하는데 실패했습니다.","/"));
    }
}