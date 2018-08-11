import { h, Component } from 'preact';
import Header from '../pantry/header/header';
import {Router, route} from 'preact-router';
import styles from './pantry.scss';

import Loadable from 'react-loadable';
import Loading from '../../components/loading/loading';

const AsyncPantryHome = Loadable({
	loader: () => import('./home/home'),
	loading: Loading
});

const AsyncPantryOffering = Loadable({
	loader: () => import('./offering/offering'),
	loading: Loading
});

const AsyncPantryGallery = Loadable({
	loader: () => import('./gallery/gallery'),
	loading: Loading
});


import {Footer} from '../../components/cafe/footer/footer';

const Pantry = () => (
	<div className={styles['cafe-container']}>
		<Header/>
		<Router>
			<AsyncPantryHome path="/pantry"/>
			<AsyncPantryOffering path="/pantry/offerings"/>
			<AsyncPantryGallery path="/pantry/gallery"/>
			<AsyncPantryHome default/>
		</Router>
		<Footer/>
	</div>
);

export default Pantry;