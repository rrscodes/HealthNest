import React, { useEffect } from 'react';
import { View, Text, ScrollView, StatusBar, SafeAreaView, Image, TextInput, FlatList } from 'react-native';

import styles from './style';
import theme from '../../utils/theme';
import Chip from '../../components/Chip';
import ArticlesCard from '../../components/ArticlesCard';

const feedTypes = ['All Posts', 'News', 'Diet', 'LifeStyle', 'Symptoms', 'Cheif Complaints'];
const articlesData = [
	{
		id: '1',
		img: require('../../assets/images/user.png'),
		name: 'Dr. Shukla',
		article: 'Genetic testing plays an important role in prevention of cancer orem ipsum...',
	},
	{
		id: '2',
		img: require('../../assets/images/user.png'),
		name: 'Dr. Sharma',
		article: 'Genetic testing plays an important role in prevention of cancer orem ipsum...',
	},
	{
		id: '3',
		img: require('../../assets/images/user.png'),
		name: 'Dr. Verma',
		article: 'Genetic testing plays an important role in prevention of cancer orem ipsum...',
	},
	{
		id: '4',
		img: require('../../assets/images/user.png'),
		name: 'Dr. Reddy',
		article: 'Genetic testing plays an important role in prevention of cancer orem ipsum...',
	},
	{
		id: '5',
		img: require('../../assets/images/user.png'),
		name: 'Dr. Iyyer',
		article: 'Genetic testing plays an important role in prevention of cancer orem ipsum...',
	},
];

const Feed = ({ navigation, feeds, getFeeds }) => {
	useEffect(() => {
		getFeeds();
	}, []);

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
							<TextInput
								style={styles.searchBox}
								placeholder='Search posts and members'
								placeholderTextColor={theme.SECONDARY_COLOR}
							/>
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
				<View style={styles.articlesContainer}>
					<Text style={styles.acticlesHeading}>LATEST ARTICLES</Text>
					<FlatList
						contentContainerStyle={styles.articlesContent}
						data={articlesData}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
						keyExtractor={(item) => {
							return item.id;
						}}
						renderItem={({ item }) => {
							return <ArticlesCard name={item.name} img={item.img} article={item.article} />;
						}}
					/>
				</View>
			</SafeAreaView>
		</ScrollView>
	);
};

export default Feed;
