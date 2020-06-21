import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import postStyle from './postStyle';

const PostCard = ({ data }) => {
	const [reaction, setReaction] = useState('');
	const [like, setLike] = useState([]);
	console.log(like);
	return (
		<View style={postStyle.cardContainer}>
			<View style={postStyle.flexContainerSpace}>
				<Text style={postStyle.categoryText}>{data.category}</Text>
				<Text style={postStyle.time}>{data.time}</Text>
			</View>
			<View style={postStyle.flexContainer}>
				<Image source={require('../../assets/images/user.png')} style={postStyle.profilePic} />
				<View>
					<View style={postStyle.flexContainer}>
						<Text style={postStyle.name}>{data.name} </Text>
						<Text style={postStyle.action}> asked a question</Text>
					</View>
					<Text style={postStyle.caption}>{data.caption}</Text>
				</View>
				<TouchableOpacity style={postStyle.moreIcon}>
					<Image source={require('../../assets/images/ellipses.png')} />
				</TouchableOpacity>
			</View>
			{data.type === 'askedQuestion' && (
				<View style={postStyle.questionContainer}>
					<Text style={postStyle.question}>{data.data.question}</Text>
					<Text style={postStyle.answer}>{data.data.details}</Text>
				</View>
			)}
			{data.type === 'post' && (
				<View style={postStyle.questionContainer}>
					<Text style={postStyle.answer}>{data.data.details}</Text>
				</View>
			)}
			{data.type === 'event' && (
				<>
					<View style={postStyle.questionContainer}>
						<Text style={postStyle.question}>{data.data.name}</Text>
						<Text style={postStyle.answer}>{data.data.date}</Text>
						<View style={postStyle.flexContainer}>
							<Image source={require('../../assets/images/map-marker-alt.png')} style={postStyle.locationIcon} />
							<Text style={postStyle.addressText}>{data.data.location}</Text>
						</View>
					</View>
					<View>
						<View>
							<Text>Are you going?</Text>
							<View>
								<Image source={require('../../assets/images/map-marker-alt.png')} style={postStyle.locationIcon} />
								<Text>21 People Going</Text>
							</View>
							<TouchableOpacity>
								<Text>No</Text>
							</TouchableOpacity>
							<TouchableOpacity>
								<Text>Yes</Text>
							</TouchableOpacity>
						</View>
					</View>
				</>
			)}
			{data.location !== '' && (
				<View style={postStyle.flexContainer}>
					<Image source={require('../../assets/images/map-marker-alt.png')} style={postStyle.locationIcon} />
					<Text style={postStyle.addressText}>{data.location}</Text>
				</View>
			)}
			<View style={postStyle.divider} />
			<View style={postStyle.flexContainer}>
				<Image source={require('../../assets/images/user.png')} style={postStyle.picOverLap} />
				<Image source={require('../../assets/images/user.png')} style={postStyle.picOverLap} />
				<Image source={require('../../assets/images/user.png')} style={postStyle.picOverLap} />
				<Text style={postStyle.members}>{data.ppl}</Text>
				{reaction === data.id && (
					<View style={postStyle.reactionContainer}>
						<TouchableOpacity
							style={postStyle.flexContainer}
							onPress={() => {
								setReaction(false);
								setLike([...like, data.id]);
							}}
						>
							<Animatable.Image source={require('../../assets/images/375-thumbs-up-1.png')} animation='bounceIn' />
							<Text style={postStyle.name}> 10</Text>
						</TouchableOpacity>
						<TouchableOpacity style={postStyle.flexContainer}>
							<Animatable.Image source={require('../../assets/images/001-grinning-face.png')} animation='bounceIn' />
							<Text style={postStyle.name}> 10</Text>
						</TouchableOpacity>
						<TouchableOpacity style={postStyle.flexContainer}>
							<Animatable.Image
								source={require('../../assets/images/029-sad-but-relieved-face.png')}
								animation='bounceIn'
							/>
							<Text style={postStyle.name}> 10</Text>
						</TouchableOpacity>
					</View>
				)}
			</View>
			<View style={postStyle.divider} />
			<View style={postStyle.flexContainerEven}>
				<TouchableOpacity
					style={postStyle.flexContainer}
					onPress={() => {
						setReaction(data.id);
					}}
				>
					{like.includes(data.id) ? (
						<Animatable.Image source={require('../../assets/images/375-thumbs-up-1.png')} animation='bounceIn' />
					) : (
						<Image source={require('../../assets/images/empty_question.png')} style={postStyle.iconsReaction} />
					)}
					<Text style={postStyle.question}> 24</Text>
				</TouchableOpacity>
				<TouchableOpacity style={postStyle.flexContainer}>
					<Image source={require('../../assets/images/comment-lines.png')} style={postStyle.iconsReaction} />
					<Text style={postStyle.question}> 24</Text>
				</TouchableOpacity>
				<TouchableOpacity>
					<Image source={require('../../assets/images/bookmark-full.png')} style={postStyle.iconsReaction} />
				</TouchableOpacity>
				<TouchableOpacity>
					<Image source={require('../../assets/images/share-alt.png')} style={postStyle.iconsReaction} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default PostCard;
