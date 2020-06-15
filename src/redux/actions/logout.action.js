import { LOGOUT_CLEAR_STORE } from '../actionTypes';

export function logoutAction() {
	return (dispatch, getState) => {
		return dispatch(logout());
	};
}

function logout() {
	return {
		type: LOGOUT_CLEAR_STORE,
	};
}
