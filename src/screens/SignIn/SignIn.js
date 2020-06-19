import React, { useState } from 'react';
import { View, Text, Image, StatusBar, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './style';
import theme from '../../utils/theme';

const SignIn = ({ authentication }) => {
	const [mobileNo, setMobileNo] = useState('');
	const handleSendOtp = () => {
		AsyncStorage.setItem('login_token', mobileNo);
		authentication();
	};
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<StatusBar backgroundColor={theme.LIGHT_COLOR} barStyle={'dark-content'} />
			<SafeAreaView>
				<Image style={styles.logo} source={require('../../assets/images/Logo.png')} />
				<Text style={styles.caption}>Welcome to {'\n'}HealthNest</Text>
				{mobileNo !== '' && <Text style={styles.mobileLabel}>Enter Mobile Number</Text>}
				<View style={styles.inputContainer}>
					<Image style={styles.flag} source={require('../../assets/images/IN.png')} />
					<Image style={styles.flag} source={require('../../assets/images/arrow-down.png')} />
					<TextInput
						style={styles.mobileInput}
						placeholder='Enter Mobile Number'
						placeholderTextColor={theme.SECONDARY_COLOR}
						keyboardType='phone-pad'
						maxLength={10}
						value={mobileNo}
						onChangeText={(value) => setMobileNo(value)}
					/>
					<Image style={styles.phoneIcon} source={require('../../assets/images/phone-icon.png')} />
				</View>
				<Text style={styles.infoText}>
					We never compromise on security!{'\n'}
					Help us create a safe place by providing your mobile number to maintain authenticity.
				</Text>
				<TouchableOpacity
					style={[
						styles.loginBtn,
						{ backgroundColor: mobileNo.length === 10 ? theme.PRIMARY_COLOR : theme.MUTED_COLOR },
					]}
					onPress={() => mobileNo.length === 10 && handleSendOtp()}
				>
					<Text
						style={[styles.loginText, { color: mobileNo.length === 10 ? theme.LIGHT_COLOR : theme.SECONDARY_COLOR }]}
					>
						Send OTP
					</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</ScrollView>
	);
};

export default SignIn;
