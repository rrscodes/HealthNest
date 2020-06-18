import React, { useState } from 'react';
import { View, Text, StatusBar, TouchableWithoutFeedback, Keyboard, SafeAreaView, Image } from 'react-native';

import styles from './style';
import theme from '../../utils/theme';

const SignIn = () => {
	const [mobileNo, setMobileNo] = useState('');
	return (
		<>
			<StatusBar backgroundColor={theme.PRIMARY_BLUE} barStyle='light-content' />
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<SafeAreaView style={styles.container}>
					<View style={styles.content}>
						<Image source={require('../../assets/images/Logo.png')} style={styles.logo} resizeMode='contain' />
					</View>
				</SafeAreaView>
			</TouchableWithoutFeedback>
		</>
	);
};

export default SignIn;
