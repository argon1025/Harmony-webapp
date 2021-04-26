//Error Modal Open Action
export const logout = () => async (dispatch, getState) => {
    dispatch({ type: "Service/LOGOUT", size: {}});
}