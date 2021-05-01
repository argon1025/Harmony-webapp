import Axios from "axios";

export const getProjectList = async() => {
    const HARMONY_URL_HOST = "https://r5fg3qi652.execute-api.ap-northeast-2.amazonaws.com/dev1/api/v1/projects";
    try {
        // 서버에서 프로젝트 리스트를 수신
        const result = await Axios.get(`${HARMONY_URL_HOST}`);

        // 프로젝트 데이터 출력
        // console.log(result);
        
        // 프로젝트 리스트 객체 반환
        return result.data.data;
    
      } catch (error) {
        //콘솔 에러 출력
        console.log(error);
        throw error;
      }
};
