import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

import postStyle from './postStyle';

const PostCard = ({ data, onPressMore, onPressShare }) => {
	const [reaction, setReaction] = useState('');
	const [like, setLike] = useState([]);
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
				<TouchableOpacity
					style={postStyle.moreIcon}
					onPress={onPressMore}
					hitSlop={{ top: 20, bottom: 20, left: 50, right: 20 }}
				>
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
					<View style={postStyle.eventContainer}>
						<View style={postStyle.flexContainerSpace}>
							<View>
								<Text style={postStyle.question}>Are you going?</Text>
								<View style={postStyle.flexContainer}>
									<Image source={require('../../assets/images/people.png')} />
									<Text style={postStyle.action}> 21 People Going</Text>
								</View>
							</View>
							<View style={postStyle.flexContainer}>
								<TouchableOpacity style={postStyle.buttonOutlined}>
									<Text style={postStyle.buttonText}>No</Text>
								</TouchableOpacity>
								<TouchableOpacity style={postStyle.buttonOutlined}>
									<Text style={postStyle.buttonText}>Yes</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</>
			)}
			{data.type === 'picture' && (
				<View style={postStyle.questionContainer}>
					<Text style={postStyle.answer}>{data.data.details}</Text>
					<Text style={postStyle.tag}>{data.data.tags}</Text>
					<Image
						source={require('../../assets/images/image-full.png')}
						style={postStyle.picture}
						resizeMode={'stretch'}
					/>
				</View>
			)}
			{data.type === 'poll' && (
				<View style={postStyle.questionContainer}>
					<Text style={postStyle.question}>{data.data.question}</Text>
					{data.data.ans.map((item, index) => {
						return (
							<View style={postStyle.pollContainer} key={index}>
								<View style={postStyle.pollTextContainer}>
									<Text style={postStyle.pollText}>{item.val}</Text>
								</View>
								<Text style={postStyle.pollPercentage}>{item.percentage}%</Text>
								<View style={[postStyle.pollProgressBar, { width: `${item.percentage}%` }]} />
							</View>
						);
					})}
					<Text style={postStyle.action}>203 Votes | Poll Ended</Text>
				</View>
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
							<Text style={postStyle.reactionName}> Like</Text>
						</TouchableOpacity>
						<TouchableOpacity style={postStyle.flexContainer}>
							<Animatable.Image source={require('../../assets/images/001-grinning-face.png')} animation='bounceIn' />
							<Text style={postStyle.reactionName}> HaHa</Text>
						</TouchableOpacity>
						<TouchableOpacity style={postStyle.flexContainer}>
							<Animatable.Image
								source={require('../../assets/images/029-sad-but-relieved-face.png')}
								animation='bounceIn'
							/>
							<Text style={postStyle.reactionName}> Sad</Text>
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
						<Image source={require('../../assets/images/Like.png')} style={postStyle.iconsReaction} />
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
				<TouchableOpacity onPress={onPressShare}>
					<Image source={require('../../assets/images/share-alt.png')} style={postStyle.iconsReaction} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default PostCard;
