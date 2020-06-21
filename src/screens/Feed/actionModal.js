import React from 'react';
import { View, Text, Platform, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import theme from '../../utils/theme';

const data = [
	{
		id: 1,
		img: require('../../assets/images/eye.png'),
		heading: 'Hide ',
		caption: 'See fewer posts like this',
	},
	{
		id: 2,
		img: require('../../assets/images/add-user.png'),
		heading: 'Unfollow',
		caption: 'See fewer posts like this',
	},
	{
		id: 3,
		img: require('../../assets/images/report.png'),
		heading: 'Report',
		caption: 'See fewer posts like this',
	},
	{
		id: 4,
		img: require('../../assets/images/link.png'),
		heading: 'Copy',
		caption: 'See fewer posts like this',
	},
];

const actionModal = ({ navigation, postType, username, isVisible, close }) => {
	return (
		<Modal
			avoidKeyboard={true}
			isVisible={isVisible}
			onBackdropPress={close}
			style={{ justifyContent: 'flex-end', margin: 0 }}
		>
			<View style={styles.modalView}>
				<View style={styles.indicator} />
				{data.map((item) => {
					return (
						<TouchableOpacity key={item.id}>
							<View style={styles.listConatiner}>
								<Image source={item.img} />
								<View style={styles.listHolder}>
									<Text style={styles.heading}>
										{item.heading} {postType}
									</Text>
									<Text style={styles.caption}>{item.caption}</Text>
								</View>
							</View>
							<View style={[styles.divider, { height: item.id === 4 ? 0 : 1 }]} />
						</TouchableOpacity>
					);
				})}
			</View>
		</Modal>
	);
};

export default actionModal;

const styles = {
	modalStyle: {
		flex: 1,
	},
	modalView: {
		backgroundColor: theme.LIGHT_COLOR,
		position: 'absolute',
		width: '100%',
		borderRadius: 8,
		alignSelf: 'center',
	},
	listConatiner: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 20,
	},
	listHolder: {
		paddingHorizontal: 20,
	},
	heading: {
		fontSize: theme.FONT_SIZE_MEDIUM,
		color: theme.DARK_GRAY,
		fontFamily: theme.SEMIBOLD_FONT,
	},
	caption: {
		color: theme.SECONDARY_COLOR,
		fontFamily: theme.DEFAULT_FONT,
		fontSize: 12,
	},
	arrow: {
		position: 'absolute',
		right: 30,
	},
	divider: {
		backgroundColor: theme.MUTED_COLOR,
	},
	closeBtn: {
		position: 'absolute',
		bottom: Platform.OS === 'android' ? 5 : 40,
		alignSelf: 'center',
	},
	indicator: {
		height: 5,
		width: 100,
		alignSelf: 'center',
		backgroundColor: theme.SECONDARY_COLOR,
		borderRadius: 20,
		marginTop: 10,
	},
};
