import { connect } from 'react-redux';
import { getFeeds } from '../../redux/actions/feeds.action';
import Feed from './Feed';

const mapStateToProps = (state) => {
	return {
		feeds: state.feeds,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getFeeds: () => dispatch(getFeeds()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
