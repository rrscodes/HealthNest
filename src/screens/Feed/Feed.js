import React from 'react';
import { View, Text, ScrollView, StatusBar, SafeAreaView, Image, TextInput, FlatList } from 'react-native';

import styles from './style';
import theme from '../../utils/theme';
import Chip from '../../components/Chip';

const feedTypes = ['All Posts', 'News', 'Diet', 'LifeStyle', 'Symptoms', 'Cheif Complaints'];

const Feed = () => {
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<StatusBar backgroundColor={theme.LIGHT_COLOR} barStyle={'dark-content'} />
			<SafeAreaView>
				<View style={styles.content}>
					<View style={styles.headerContainer}>
						<View>
							<Text style={styles.headerText}>COMMUNITY</Text>
							<View style={styles.dropdownHolder}>
								<Text style={styles.dropdownText}>All Communities </Text>
								<Image source={require('../../assets/images/arrow-down.png')} />
							</View>
						</View>
						<Image source={require('../../assets/images/user.png')} />
					</View>
					<View style={styles.searchBoxContainer}>
						<View>
							<TextInput style={styles.searchBox} placeholder='Search posts and members' />
							<Image style={styles.searchIcon} source={require('../../assets/images/search.png')} />
						</View>
						<Image style={styles.bellIcon} source={require('../../assets/images/bell.png')} />
					</View>
				</View>
				<FlatList
					contentContainerStyle={styles.chipContainer}
					data={feedTypes}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(index) => {
						return index;
					}}
					renderItem={({ item }) => {
						return <Chip name={item} />;
					}}
				/>
				<View style={styles.divider} />
			</SafeAreaView>
		</ScrollView>
	);
};

export default Feed;
