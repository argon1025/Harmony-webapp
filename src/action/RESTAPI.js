import Axios from "axios";

export const getComments = (testValue) => async (dispatch, getState) => {
    dispatch({ type: "ServiceInformaion/SET_TEXT", size: "pong" });
}

//인가코드를 이용해서 카카오 토큰정보를 로드
export const getKakaoToken = (kakaoCode) => async (dispatch, getState) => {
    const URL_HOST = "https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=dab58a800514cc429576cf0f84c83ab0&redirect_uri=http://harmony.seongrok.net/kakao/auth&code=";
    try {
        const result = await Axios.get(`${URL_HOST}${kakaoCode}`);
        console.log(result);
    } catch (error) {
        console.log(error.response);
    }
}