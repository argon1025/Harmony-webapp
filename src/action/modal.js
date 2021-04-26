//Error Modal Open Action
export const openErrorMessage = (error="error",path) => async (dispatch, getState) => {
    dispatch({ type: "Service/ERROR_MODAL_OPEN", size: {msg: error,path:path}});
}

//Error Modal close Action
export const closeErrorMessage = (path) => async (dispatch, getState) => {
    dispatch({ type: "Service/ERROR_MODAL_CLOSE"});

    // 확인 버튼 클릭시 path 인자가 있을경우엔 해당 path경로로 리다이렉트
    if(path!=undefined){
        window.location.pathname = path;
    }
}