import 'react-native';
import React from 'react';
import App from '../index';

import renderer from 'react-test-renderer';

beforeAll(() => {
	jest.mock('@react-native-community/async-storage');
});
it('renders correctly', () => {
	const tree = renderer.create(<App />).toJSON();
	expect(tree).toMatchSnapshot();
});
