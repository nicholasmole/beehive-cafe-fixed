import { h, Component } from 'preact';
import styles from '../menu.scss';

export const Lunch = () => (
	<div className={styles['cafe-menu-serve-container']}>
		<div className={styles['cafe-menu-serve-title']}>
			We serve lunch every day from
		</div>
		<div className={styles['cafe-menu-serve-time']}>
			7 am until 3:30 pm
		</div>
	</div>
);