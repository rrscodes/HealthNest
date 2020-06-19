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
	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		backgroundColor: theme.LIGHT_COLOR,
	},
	content: {
		paddingHorizontal: wp(6),
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20,
	},
	headerText: {
		color: theme.SECONDARY_COLOR,
		fontFamily: theme.SEMIBOLD_FONT,
	},
	dropdownHolder: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	dropdownText: {
		color: theme.PRIMARY_COLOR,
		fontFamily: theme.BOLD_FONT,
		fontSize: theme.FONT_SIZE_MEDIUM,
	},
	searchBoxContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	searchBox: {
		borderColor: theme.LIGHT_GREEN,
		borderWidth: 1,
		width: wp(80),
		padding: 10,
		paddingVertical: Platform.OS === 'android' ? 5 : 15,
	},
	searchIcon: {
		position: 'absolute',
		top: 12,
		right: 15,
	},
	bellIcon: {
		marginLeft: 15,
	},
	chipContainer: {
		paddingVertical: hp(2),
		paddingLeft: wp(6),
	},
	divider: {
		height: 10,
		backgroundColor: theme.MUTED_COLOR,
	},
	articlesContainer: {
		backgroundColor: theme.MUTED_COLOR,
		paddingBottom: hp(5),
	},
	acticlesHeading: {
		color: theme.DARK_GRAY,
		fontFamily: theme.BOLD_FONT,
		paddingVertical: hp(3),
		paddingLeft: wp(6),
	},
	articlesContent: {
		paddingLeft: wp(6),
	},
});
