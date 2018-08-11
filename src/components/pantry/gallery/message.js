import { h, Component } from 'preact';
import styles from './message.scss';
import {getCafeHours} from '../../../helpers/cafeTodaysHours';

export const Gallery = () => (
	<div className={`${styles['cafe-menu-serve-container']} ${styles['cafe-menu-serve-container-get-color']}`}>
		<div className={styles['cafe-menu-serve-title']}>
			Check out our Beehive Pantry Gallery. 
		</div>
		<div className={styles['cafe-menu-serve-title']}>
			Then come check us out in person! 
		</div>
		<div className={styles['cafe-menu-serve-time']}>
			{getCafeHours()}
		</div>
	</div>
);