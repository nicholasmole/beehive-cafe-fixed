import { h, Component } from 'preact';
import styles from '../pantry.scss';

import {Banner} from '../../../components/pantry/banner';
import Gallery from '../../../components/pantry/gallery/gallery';
import { Gallery as GalleryMessage } from '../../../components/pantry/gallery/message';

const PantryGallery = () => (
	<div className={styles['cafe-container']}>
		<Banner/>
		<GalleryMessage/>
		<Gallery/>
	</div>
);

export default PantryGallery;