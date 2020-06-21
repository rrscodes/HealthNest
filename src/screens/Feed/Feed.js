import React, { useEffect, useState } from 'react';
import {
	View,
	Text,
	StatusBar,
	SafeAreaView,
	Image,
	TextInput,
	FlatList,
	TouchableOpacity,
	ActivityIndicator,
	ScrollView,
	LayoutAnimation,
	Platform,
	UIManager,
} from 'react-native';

import styles from './style';
import theme from '../../utils/theme';
import Chip from '../../components/Chip';
import ArticlesCard from '../../components/ArticlesCard';
import PostCard from './PostCard';
import ActionModal from './actionModal';
import ShareModal from './ShareModal';

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

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
	UIManager.setLayoutAnimationEnabledExperimental(true);
}
const Feed = ({ navigation, feeds, getFeeds }) => {
	let offset = 0;
	const [direction, setDirection] = useState(true);
	const [showActionModal, setShowActionModal] = useState(false);
	const [showShareModal, setShowShareModal] = useState(false);
	useEffect(() => {
		getFeeds();
	}, []);

	const onScroll = (event) => {
		let currentOffset = event.nativeEvent.contentOffset.y;
		let currentDirection = currentOffset > offset ? false : true;
		offset = currentOffset;
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		setDirection(currentDirection);
	};

	if (feeds.feeds.length === 0) {
		return (
			<View style={styles.loaderContainer}>
				<ActivityIndicator size='large' color={theme.PRIMARY_COLOR} />
			</View>
		);
	} else {
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar backgroundColor={theme.LIGHT_COLOR} barStyle={'dark-content'} />
				<View style={styles.content}>
					{direction && (
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
					)}
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
				<View>
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
				</View>
				<View style={[styles.divider, { height: direction ? 10 : 1 }]} />
				<ScrollView
					nestedScrollEnabled={true}
					scrollEventThrottle={600}
					onMomentumScrollBegin={(event) => onScroll(event)}
				>
					<FlatList
						data={feeds.feeds}
						keyExtractor={(item) => {
							return item.id;
						}}
						ItemSeparatorComponent={() => <View style={styles.divider} />}
						renderItem={({ item }) => {
							return (
								<PostCard
									data={item}
									onPressMore={() => setShowActionModal(true)}
									onPressShare={() => setShowShareModal(true)}
								/>
							);
						}}
					/>

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

					<FlatList
						data={feeds.feeds}
						keyExtractor={(item) => {
							return item.id;
						}}
						ItemSeparatorComponent={() => <View style={styles.divider} />}
						renderItem={({ item }) => {
							return (
								<PostCard
									data={item}
									onPressMore={() => setShowActionModal(true)}
									onPressShare={() => setShowShareModal(true)}
								/>
							);
						}}
					/>
				</ScrollView>
				<ActionModal isVisible={showActionModal} close={() => setShowActionModal(false)} />
				<ShareModal isVisible={showShareModal} close={() => setShowShareModal(false)} />
			</SafeAreaView>
		);
	}
};

export default Feed;
