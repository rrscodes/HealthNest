import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import Splash from '../screens/Splash';
import SignIn from '../screens/SignIn';
import Feed from '../screens/Feed';
import Library from '../screens/Library';
import Messages from '../screens/Messages';
import Services from '../screens/Services';
import Question from '../screens/Question';

import theme from '../utils/theme';
import { navigationRef } from './RootNavigation';
import { authentication } from '../redux/actions/auth.action';

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
	<AppTabs.Navigator
		initialRouteName='Feed'
		backBehavior='initialRoute'
		shifting={true}
		sceneAnimationEnabled={true}
		tabBarOptions={{
			activeTintColor: theme.PRIMARY_COLOR,
			inactiveTintColor: theme.SECONDARY_COLOR,
			activeBackgroundColor: theme.DARK_BLUE,
			inactiveBackgroundColor: theme.DARK_BLUE,
			style: {
				backgroundColor: theme.LIGHT_COLOR,
				borderTopColor: theme.SECONDARY_COLOR,
			},
		}}
	>
		<AppTabs.Screen
			name='Feed'
			component={Feed}
			options={{
				tabBarIcon: (props) => <AntDesign name='home' size={props.size} color={props.color} />,
			}}
		/>
		<AppTabs.Screen
			name='Library'
			component={Library}
			options={{
				tabBarIcon: (props) => <AntDesign name='search1' size={props.size} color={props.color} />,
			}}
		/>
		<AppTabs.Screen
			name='Messages'
			component={Messages}
			options={{
				tabBarIcon: (props) => <FontAwesome name='calendar-plus-o' size={props.size} color={props.color} />,
			}}
		/>
		<AppTabs.Screen
			name='Services'
			component={Services}
			options={{
				tabBarIcon: (props) => <AntDesign name='user' size={props.size} color={props.color} />,
			}}
		/>
	</AppTabs.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
	<AuthStack.Navigator
		screenOptions={{
			headerShown: false,
		}}
	>
		<AuthStack.Screen name='SignIn' component={SignIn} />
	</AuthStack.Navigator>
);

const Stack = createStackNavigator();
const AppStack = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: theme.PRIMARY_BLUE,
				},
				headerTitleStyle: { color: theme.LIGHT_COLOR },
				headerTintColor: theme.LIGHT_COLOR,
			}}
		>
			<Stack.Screen name='Feed' component={AppTabsScreen} options={{ headerShown: false }} />
			<Stack.Screen name='Question' component={Question} options={{ headerTitle: 'Question' }} />
		</Stack.Navigator>
	);
};

const Routes = ({ auth, authentication }) => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getToken();
	}, []);

	const getToken = async () => {
		let token = await AsyncStorage.getItem('login_token');
		token && authentication();
		// setToken(token);
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	};

	return (
		<NavigationContainer ref={navigationRef}>
			{isLoading ? <Splash /> : auth.isLoggedIn ? <AppStack /> : <AuthStackScreen />}
		</NavigationContainer>
	);
};

const mapStateToProps = (state) => {
	console.log(state);
	return {
		auth: state.auth,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		authentication: () => dispatch(authentication()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
