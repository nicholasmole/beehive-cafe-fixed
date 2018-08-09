import { Provider } from 'preact-redux';
import { h, render } from 'preact';

import './index.css';
import {createStore} from 'redux';
import reducer from './ducks/index';
import App from './containers/app/app';

const store = createStore(reducer);

render(
	<Provider store={store}>
		<App/>
	</Provider>
	, document.getElementById('root'));
