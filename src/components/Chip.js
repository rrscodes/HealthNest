import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import theme from '../utils/theme';

export default function Chip({ name, selected }) {
	return (
		<TouchableOpacity
			style={[styles.chipContainer, { backgroundColor: name === 'All Posts' ? theme.LIGHT_GREEN : theme.LIGHT_COLOR }]}
		>
			<Text style={styles.chipText}>{name}</Text>
		</TouchableOpacity>
	);
}

const styles = {
	chipContainer: {
		padding: 10,
		paddingHorizontal: 20,
		borderRadius: 20,
		borderColor: theme.LIGHT_GREEN,
		borderWidth: 1,
		marginRight: 10,
	},
	chipText: {
		fontFamily: theme.DEFAULT_FONT,
		color: theme.PRIMARY_COLOR,
	},
};
