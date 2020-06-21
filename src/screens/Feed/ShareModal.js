import React from 'react';
import { View, Text, Platform, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import theme from '../../utils/theme';

const actionModal = ({ navigation, isVisible, close }) => {
	return (
		<Modal
			avoidKeyboard={true}
			isVisible={isVisible}
			onBackdropPress={close}
			style={{ justifyContent: 'flex-end', margin: 0 }}
		>
			<View style={styles.modalView}>
				<View style={styles.indicator} />
				<Text style={styles.caption}>Share Post</Text>
				<TouchableOpacity>
					<View style={styles.listConatiner}>
						<Image source={require('../../assets/images/Icons.png')} />
						<Text style={styles.heading}>Send as a private message</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.listConatiner}>
						<Image source={require('../../assets/images/Icons(6).png')} />
						<Text style={styles.heading}>Send as a post</Text>
					</View>
					<View style={styles.divider} />
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.listConatiner}>
						<Image source={require('../../assets/images/share-fb.png')} />
						<Text style={styles.heading}>Send as a Facebook</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.listConatiner}>
						<Image source={require('../../assets/images/Icons(1).png')} />
						<Text style={styles.heading}>Send as a WhatsApp</Text>
					</View>
				</TouchableOpacity>
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
		fontFamily: theme.DEFAULT_FONT,
		paddingLeft: 20,
	},
	caption: {
		color: theme.DARK_GRAY,
		fontFamily: theme.BOLD_FONT,
		fontSize: 16,
		alignSelf: 'center',
		paddingTop: 20,
	},
	arrow: {
		position: 'absolute',
		right: 30,
	},
	divider: {
		backgroundColor: theme.MUTED_COLOR,
		height: 1,
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
