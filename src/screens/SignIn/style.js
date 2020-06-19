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
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: wp(6),
		backgroundColor: theme.LIGHT_COLOR,
	},
	logo: {
		marginLeft: -10,
	},
	flag: {
		marginRight: 5,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	caption: {
		fontFamily: theme.BOLD_FONT,
		fontSize: 24,
		color: theme.DARK_GRAY,
		paddingTop: 8,
		paddingBottom: hp(7),
	},
	mobileInput: {
		color: theme.DARK_GRAY,
		borderBottomColor: theme.SECONDARY_COLOR,
		borderBottomWidth: 1,
		width: wp(75),
		paddingBottom: Platform.OS === 'android' ? 0 : 5,
		marginTop: Platform.OS === 'android' ? -10 : 0,
	},
	phoneIcon: {
		position: 'absolute',
		right: 10,
		top: Platform.OS === 'android' ? 5 : 0,
	},
	infoText: {
		color: theme.SECONDARY_COLOR,
		fontFamily: theme.DEFAULT_FONT,
		fontSize: 12,
		paddingTop: hp(5),
		paddingBottom: hp(10),
		lineHeight: 18,
	},
	loginBtn: {
		paddingHorizontal: 30,
		alignSelf: 'center',
		paddingVertical: 20,
	},
	loginText: {
		fontFamily: theme.BOLD_FONT,
		fontSize: theme.FONT_SIZE_MEDIUM,
	},
	mobileLabel: {
		fontSize: theme.FONT_SIZE_SMALL,
		color: theme.SECONDARY_COLOR,
		fontFamily: theme.DEFAULT_FONT,
		paddingBottom: 5,
	},
});
