//Error Modal Open Action
export const openErrorMessage = (error="error") => async (dispatch, getState) => {
    dispatch({ type: "Service/ERROR_MODAL_OPEN", size: error });
}

//Error Modal close Action
export const closeErrorMessage = () => async (dispatch, getState) => {
    dispatch({ type: "Service/ERROR_MODAL_CLOSE"});
}