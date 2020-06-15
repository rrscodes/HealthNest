import { AUTHENTICATION_SUCCESS } from '../actionTypes';
const initialState = {
	isLoggedIn: false,
};
export default auth = (state = initialState, action) => {
	switch (action.type) {
		case AUTHENTICATION_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
			};
		default:
			return state;
	}
};
