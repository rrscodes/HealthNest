import { StyleSheet, Dimensions } from 'react-native';
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
		backgroundColor: theme.PRIMARY_BLUE,
	},
	content: {
		marginHorizontal: wp(8),
	},
	logo: { width: 140, height: 117, alignSelf: 'center', marginVertical: hp(6) },
	caption: {
		fontFamily: theme.DEFAULT_FONT,
		fontSize: 19,
		color: theme.LIGHT_COLOR,
		paddingTop: 8,
		paddingBottom: 20,
	},
	eye: { position: 'absolute', right: 20, top: 30, elevation: 6 },
	button: {
		paddingVertical: 10,
		borderRadius: 12,
		marginVertical: 40,
		alignSelf: 'center',
		borderColor: theme.SECONDARY_GREEN,
		borderWidth: 2,
	},
	forgotText: {
		alignSelf: 'flex-end',
		color: theme.SECONDARY_GREEN,
		fontFamily: theme.DEFAULT_FONT,
	},
	loginBtn: {
		marginVertical: 40,
		backgroundColor: theme.PRIMARY_GREEN,
		paddingHorizontal: 20,
		alignSelf: 'flex-end',
		borderRadius: 20,
		paddingVertical: 8,
		shadowOffset: {
			width: 5,
			height: 3,
		},
		shadowColor: 'black',
		shadowOpacity: 0.2,
		elevation: 5,
	},
	loginText: {
		fontFamily: theme.DEFAULT_FONT,
		color: theme.LIGHT_COLOR,
	},
});
