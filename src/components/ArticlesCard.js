import React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

import theme from '../utils/theme';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
function wp(percentage) {
	const value = (percentage * viewportWidth) / 100;
	return Math.round(value);
}
const ArticlesCard = ({ img, name, article }) => {
	return (
		<View style={styles.conatinerBox}>
			<View style={styles.flexHolder}>
				<Image source={img} />
				<Text style={styles.name}>{name}</Text>
			</View>
			<Text style={styles.article}>{article}</Text>
			<View style={styles.divider} />
			<TouchableOpacity style={styles.flexHolderFooter}>
				<Text style={styles.read}>READ ARTICLE</Text>
				<Image source={require('../assets/images/Icon-color.png')} />
			</TouchableOpacity>
		</View>
	);
};

export default ArticlesCard;

const styles = {
	conatinerBox: {
		backgroundColor: theme.LIGHT_COLOR,
		borderRadius: 12,
		marginRight: 15,
		padding: 10,
		width: wp(72),
	},
	flexHolder: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	name: {
		color: theme.DARK_GRAY,
		paddingLeft: 10,
		fontFamily: theme.BOLD_FONT,
		fontSize: theme.FONT_SIZE_MEDIUM,
	},
	article: {
		fontFamily: theme.DEFAULT_FONT,
	},
	divider: {
		height: 1,
		backgroundColor: theme.MUTED_COLOR,
		marginTop: 10,
		marginBottom: 15,
	},
	flexHolderFooter: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginRight: 10,
		marginBottom: 5,
	},
	read: {
		color: theme.PRIMARY_COLOR,
		fontFamily: theme.BOLD_FONT,
		fontSize: theme.FONT_SIZE_MEDIUM,
	},
};
