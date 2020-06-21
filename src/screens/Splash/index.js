import React from 'react';
import { View, StatusBar } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Splash = () => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<StatusBar backgroundColor='#FFFFFF' barStyle={'dark-content'} />
			<Animatable.Image source={require('../../assets/images/Logo.png')} animation='fadeInUp' />
		</View>
	);
};

export default Splash;
