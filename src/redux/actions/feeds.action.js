import { FEEDS_SUCCESS } from '../actionTypes';
const feedsData = [
	{
		id: '1',
		category: 'DIET',
		time: '1 min',
		img: require('../../assets/images/user.png'),
		name: 'rohit.shetty12',
		caption: 'Diagnosed Recently',
		type: 'askedQuestion',
		data: {
			question: 'What are the signs and symptoms of skin cancer?',
			details:
				'I’ve been facing a few possibble symptoms of skin cancer. I’ve googled the possibilities but i thought i’d ask the community instead.',
		},
		location: 'Peninsula Park, Andheri, Mumbai',
		ppl: '24 members have this question',
		raise: '24',
		comment: '24',
		like: null,
	},
	{
		id: '2',
		category: 'DIET',
		time: '1 min',
		img: require('../../assets/images/user.png'),
		name: 'priya321',
		caption: 'Diagnosed Recently',
		type: 'post',
		data: {
			details:
				'My husband has his 3 days transplant assessment in Newcastle next month, strange mix of emotions. For those that have been through this how long did it take following assessment was it until you were t... See More',
		},
		location: 'Peninsula Park, Andheri, Mumbai',
		ppl: '24 members have reacted to this post',
		raise: null,
		comment: '24',
		like: 24,
	},
	{
		id: '3',
		category: null,
		time: '1 min',
		img: require('../../assets/images/user.png'),
		name: 'username1275',
		caption: 'Diagnosed Recently',
		type: 'event',
		data: {
			name: 'Cancer meet at Rajeev Gandhi National Park',
			date: 'Tue, apr 23, 2019 | 7 pm IST',
			location: 'Rajeev gandhi national park, mumbai',
		},
		location: null,
		ppl: '24 members likes this event',
		raise: null,
		comment: '24',
		like: 24,
	},
	{
		id: '4',
		category: 'LIFESTYLE',
		time: '1 min',
		img: require('../../assets/images/user.png'),
		name: 'user987',
		caption: 'Expert',
		type: 'picture',
		data: {
			pic: require('../../assets/images/image-full.png'),
			details: 'Something to motivate you.',
			tags: '#itsokayto #cancersurvivor',
		},
		location: 'Peninsula Park, Andheri, Mumbai',
		ppl: '24 members have this question',
		raise: null,
		comment: '24',
		like: 24,
	},
	{
		id: '5',
		category: 'DIET',
		time: '1 min',
		img: require('../../assets/images/user.png'),
		name: 'user987',
		caption: 'DIAGNOSED RECENTLY',
		type: 'poll',
		data: {
			question: 'What’s the best Hospital in India for cancer?',
			result: 203,
			ended: true,
			ans: [
				{
					val: 'Apollo Hospital, Bangalore',
					percentage: 20,
				},
				{
					val: 'AIMMS, Delhi',
					percentage: 30,
				},
				{
					val: 'Kokilaben Dhirubhai Ambani Hospital & Medical Research Institute, Mumbai',
					percentage: 50,
				},
			],
		},
		location: null,
		ppl: null,
		raise: null,
		comment: '24',
		like: 24,
	},
	{
		id: '6',
		category: 'DIET',
		time: '1 min',
		img: require('../../assets/images/user.png'),
		name: 'Member',
		caption: 'Diagnosed Recently',
		type: 'post',
		data: {
			details:
				'My husband has his 3 days transplant assessment in Newcastle next month, strange mix of emotions. For those that have been through this how long did it take following assessment was it until you were t... See More',
		},
		location: 'Peninsula Park, Andheri, Mumbai',
		ppl: '24 members have reacted to this post',
		raise: null,
		comment: '24',
		like: 24,
	},
];

export function getFeeds() {
	return (dispatch) => {
		dispatch(feedsActionSuccess(feedsData));
	};
}

function feedsActionSuccess(data) {
	return {
		type: FEEDS_SUCCESS,
		data,
	};
}
