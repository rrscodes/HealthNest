import * as React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import App from './routes';
import store from './redux/store';

export default function Main() {
	return (
		<StoreProvider store={store}>
			<App />
		</StoreProvider>
	);
}
