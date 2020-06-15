import { AUTHENTICATION_SUCCESS } from '../actionTypes';

export function authentication() {
	return (dispatch) => {
		dispatch(authenticationActionSuccess());
	};
}

function authenticationActionSuccess() {
	return {
		type: AUTHENTICATION_SUCCESS,
	};
}
