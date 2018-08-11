import { h, Component } from 'preact';
import styles from '../menu.scss';

export const Dinner = () => (
	<div className={styles['cafe-menu-serve-container']}>
		<div className={styles['cafe-menu-serve-title']}>
			We serve dinner every thurs, fri & sat from
		</div>
		<div className={styles['cafe-menu-serve-time']}>
			5 until 9 pm
		</div>
	</div>
);