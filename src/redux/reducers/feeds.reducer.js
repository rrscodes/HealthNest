import { FEEDS_SUCCESS } from '../actionTypes';
const initialState = {
	feeds: [],
};
export default feeds = (state = initialState, action) => {
	console.log(action.data);
	switch (action.type) {
		case FEEDS_SUCCESS:
			return {
				...state,
				feeds: action.data,
			};
		default:
			return state;
	}
};
