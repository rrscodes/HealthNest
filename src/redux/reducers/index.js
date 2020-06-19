import { combineReducers } from 'redux';
import auth from './auth.reducer';
import feeds from './feeds.reducer';
const appReducer = combineReducers({
	auth,
	feeds,
});

const rootReducer = (state, action) => {
	if (action.type === 'LOGOUT_CLEAR_STORE') {
		state = undefined;
	}
	return appReducer(state, action);
};
export default rootReducer;
