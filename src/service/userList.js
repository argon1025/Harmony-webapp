/**
 * Action
 *
 * Redux 에서 상태에 변화가 필요할때 발생되는 액션
 */
import Axios from "axios";
import * as modal from "../action/modal";

export const getUserList = async() => {
    const HARMONY_URL_HOST = "https://r5fg3qi652.execute-api.ap-northeast-2.amazonaws.com/dev1/api/v1/accounts";
    try {
        // 서버에서 회원 리스트를 수신
        const result = await Axios.get(`${HARMONY_URL_HOST}`);

        // 회원 데이터 출력
        // console.log(result);
        
        // 회원 리스트 객체 반환
        return result.data.data;
    
      } catch (error) {
        //콘솔 에러 출력
        console.log(error);
        throw error;
      }
};
