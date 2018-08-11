import { h, Component } from 'preact';
import styles from './cafe.scss';
import Header from '../header/header';
import {Router, route} from 'preact-router';

import Loadable from 'react-loadable';
import Loading from '../../components/loading/loading';

const AsyncCafeHome = Loadable({
	loader: () => import('./home/home'),
	loading: Loading
});

const AsyncCafeMenu = Loadable({
	loader: () => import('./menu/menu'),
	loading: Loading
});

const AsyncCafeGallery = Loadable({
	loader: () => import('./gallery/gallery'),
	loading: Loading
});

import {Footer} from '../../components/cafe/footer/footer';

const Cafe = () => (
	<div className={styles['cafe-container']}>
		<Header/>
		<Router>
			<AsyncCafeHome path="/cafe"/>
			<AsyncCafeMenu path="/cafe/menu/:id"/>
			<AsyncCafeGallery path="/cafe/gallery"/>
			{/* <AsyncCafe path="/cafe/:id"/> */} 
			<AsyncCafeHome default/>
		</Router>
		<Footer/>
	</div>
);

export default Cafe;