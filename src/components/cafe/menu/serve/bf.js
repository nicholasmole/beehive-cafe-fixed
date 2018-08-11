import { h, Component } from 'preact';
import styles from '../menu.scss';

export const BF = () => (
	<div className={styles['cafe-menu-serve-container']}>
		<div className={styles['cafe-menu-serve-title']}>
			We serve breakfast every day from
		</div>
		<div className={styles['cafe-menu-serve-time']}>
			7 am until 3:30 pm
		</div>
	</div>
);