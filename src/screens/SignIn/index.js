import { connect } from 'react-redux';
import { authentication } from '../../redux/actions/auth.action';
import SignIn from './SignIn';

const mapDispatchToProps = (dispatch) => {
	return {
		authentication: () => dispatch(authentication()),
	};
};

export default connect(null, mapDispatchToProps)(SignIn);
