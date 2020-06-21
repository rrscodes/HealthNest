import { StyleSheet, Dimensions, Platform } from 'react-native';
import theme from '../../utils/theme';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp(percentage) {
	const value = (percentage * viewportWidth) / 100;
	return Math.round(value);
}
function hp(percentage) {
	const value = (percentage * viewportHeight) / 100;
	return Math.round(value);
}

export default StyleSheet.create({
	cardContainer: {
		paddingVertical: 17,
		paddingHorizontal: 15,
	},
	flexContainerSpace: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: 10,
	},
	flexContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	categoryText: {
		fontFamily: theme.SEMIBOLD_FONT,
		color: theme.DARK_GRAY,
	},
	time: {
		fontFamily: theme.LIGHT_FONT,
	},
	profilePic: {
		height: 50,
		width: 50,
		marginRight: 10,
	},
	moreIcon: {
		position: 'absolute',
		right: 0,
	},
	name: {
		fontFamily: theme.BOLD_FONT,
		color: theme.DARK_GRAY,
	},
	action: {
		fontFamily: theme.DEFAULT_FONT,
		color: theme.SECONDARY_COLOR,
	},
	caption: {
		fontFamily: theme.DEFAULT_FONT,
		color: theme.PRIMARY_COLOR,
		fontSize: 12,
	},
	question: {
		fontFamily: theme.BOLD_FONT,
		fontSize: theme.FONT_SIZE_MEDIUM,
		lineHeight: 24,
	},
	answer: {
		fontFamily: theme.DEFAULT_FONT,
		lineHeight: 22,
	},
	questionContainer: {
		paddingVertical: 10,
	},
	locationIcon: {
		height: 20,
		width: 20,
	},
	addressText: {
		color: theme.PRIMARY_COLOR,
		paddingLeft: 5,
	},
	divider: {
		height: 1,
		backgroundColor: theme.MUTED_COLOR,
		marginVertical: 10,
	},
	iconsReaction: {
		height: 30,
		width: 30,
	},
	flexContainerEven: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: wp(5),
	},
	picOverLap: {
		marginRight: -15,
	},
	members: {
		fontFamily: theme.DEFAULT_FONT,
		color: theme.DARK_GRAY,
		fontSize: 12,
		paddingLeft: 30,
	},
	reactionContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		borderRadius: 40,
		elevation: 5,
		shadowOffset: {
			width: 2,
			height: 1,
		},
		shadowColor: 'black',
		shadowOpacity: 0.2,
		paddingVertical: 15,
		position: 'absolute',
		top: -20,
		backgroundColor: theme.LIGHT_COLOR,
		width: wp(60),
		zIndex: 10,
	},
	eventContainer: {
		backgroundColor: '#EEFAF9',
		padding: 30,
		marginHorizontal: -20,
		marginBottom: -10,
	},
	buttonOutlined: {
		borderColor: theme.LIGHT_GREEN,
		borderWidth: 1,
		borderRadius: 20,
		paddingVertical: 10,
		paddingHorizontal: 25,
		marginLeft: 10,
	},
	buttonText: {
		color: theme.PRIMARY_COLOR,
		fontFamily: theme.DEFAULT_FONT,
	},
	picture: {
		marginHorizontal: -15,
		marginTop: 10,
		width: wp(100),
	},
	tag: {
		color: 'blue',
		fontFamily: theme.DEFAULT_FONT,
	},
	pollContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	pollTextContainer: {
		flex: 0.9,
		marginVertical: 10,
		paddingVertical: 5,
	},
	pollPercentage: {
		flex: 0.1,
		fontFamily: theme.DEFAULT_FONT,
	},
	pollText: {
		fontFamily: theme.DEFAULT_FONT,
		zIndex: 2,
		paddingLeft: 10,
	},
	pollProgressBar: {
		backgroundColor: theme.LIGHT_GREEN,
		height: 40,
		position: 'absolute',
	},
	reactionName: {
		fontFamily: theme.LIGHT_FONT,
	},
});
