import { h, Component } from 'preact';
import styles from '../menu.scss';
import {getPantryHours} from '../../../../helpers/pantryTodaysHours';

export const Gallery = () => (
	<div className={`${styles['cafe-menu-serve-container']} ${styles['cafe-menu-serve-container-get-color']}`}>
		<div className={styles['cafe-menu-serve-title']}>
			Check out our Beehive Cafe Gallery. 
		</div>
		<div className={styles['cafe-menu-serve-title']}>
			Then come check us out in person! 
		</div>
		<div className={styles['cafe-menu-serve-time']}>
			{getPantryHours()}
		</div>
	</div>
);