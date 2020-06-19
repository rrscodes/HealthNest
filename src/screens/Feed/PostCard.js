import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import postStyle from './postStyle';

const PostCard = ({ data }) => {
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
			</View>
			<View style={postStyle.divider} />
			<View style={postStyle.flexContainerEven}>
				<TouchableOpacity style={postStyle.flexContainer}>
					<Image source={require('../../assets/images/empty_question.png')} style={postStyle.iconsReaction} />
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
