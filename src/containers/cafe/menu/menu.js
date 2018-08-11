import { h, Component } from 'preact';
import styles from '../cafe.scss';
import {Banner} from '../../../components/cafe/banner';
import {Menu} from '../../../components/cafe/menu/menu';
import Loadable from 'react-loadable';
import Loading from '../../../components/loading/loading';
import {Router, route} from 'preact-router';

const AsyncBf = Loadable({
	loader: () => import('../../../components/cafe/menu/breakfast'),
	loading: Loading
});
const AsyncLunch = Loadable({
	loader: () => import('../../../components/cafe/menu/lunch'),
	loading: Loading
});
const AsyncDinner = Loadable({
	loader: () => import('../../../components/cafe/menu/dinner'),
	loading: Loading
});

const Home = () => (
	<div className={styles['cafe-container']}>
		<Banner/>
		<Router>
			<AsyncBf path="/cafe/menu/breakfast"/>
			<AsyncLunch path="/cafe/menu/lunch"/>
			<AsyncDinner path="/cafe/menu/dinner"/>
		</Router>
	</div>
);

export default Home;