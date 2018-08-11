import { h, Component } from 'preact';
import styles from '../cafe.scss';
import {Banner} from '../../../components/cafe/banner';
import Gallery from '../../../components/cafe/gallery/gallery';
import { Gallery as GalleryMessage } from '../../../components/cafe/menu/serve/gallery';

const Home = () => (
	<div className={styles['cafe-container']}>
		<Banner/>
		<GalleryMessage/>
		<Gallery/>
	</div>
);

export default Home;