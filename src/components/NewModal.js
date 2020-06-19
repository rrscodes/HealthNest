import React from 'react';
import { View, Text, Platform, Image, TouchableOpacity } from 'react-native';
import theme from '../utils/theme';

const data = [
	{
		id: 1,
		img: require('../assets/images/Icons(2).png'),
		heading: 'Create a post',
		caption: 'Share your thoughts with the community',
	},
	{
		id: 2,
		img: require('../assets/images/Icons(3).png'),
		heading: 'Ask a Question',
		caption: 'Any doubts? As the community',
	},
	{
		id: 3,
		img: require('../assets/images/Icons(4).png'),
		heading: 'Start a Poll',
		caption: 'Need the opinion of the many?',
	},
	{
		id: 4,
		img: require('../assets/images/Icons(5).png'),
		heading: 'Organise an Event',
		caption: 'Start a meet with people to share your joys',
	},
];

const NewModal = ({ navigation }) => {
	return (
		<View style={styles.modalStyle}>
			<View style={styles.modalView}>
				{data.map((item) => {
					return (
						<TouchableOpacity key={item.id}>
							<View style={styles.listConatiner}>
								<Image source={item.img} />
								<View style={styles.listHolder}>
									<Text style={styles.heading}>{item.heading}</Text>
									<Text style={styles.caption}>{item.caption}</Text>
								</View>
								<Image source={require('../assets/images/arrow-right.png')} style={styles.arrow} />
							</View>
							<View style={[styles.divider, { height: item.id === 4 ? 0 : 1 }]} />
						</TouchableOpacity>
					);
				})}
			</View>
			<TouchableOpacity style={styles.closeBtn} onPress={() => navigation.goBack()}>
				<Image source={require('../assets/images/close.png')} />
			</TouchableOpacity>
		</View>
	);
};

export default NewModal;

const styles = {
	modalStyle: {
		flex: 1,
	},
	modalView: {
		backgroundColor: theme.LIGHT_COLOR,
		position: 'absolute',
		bottom: Platform.OS === 'android' ? 60 : 100,
		width: '95%',
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
		color: theme.PRIMARY_COLOR,
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
		bottom: 5,
		alignSelf: 'center',
	},
};
