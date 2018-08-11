import { h, Component } from 'preact';
import styles from '../menu.scss';
import { Link } from 'preact-router/match';

export const Links = () => (
	<div className={styles['cafe-menu-link-container']}>
		<Link
			className={styles['cafe-menu-link-container-button']}
			activeClassName="cafe-menu-active"
			href="/cafe/menu/breakfast"	
		>
			Breakfast
		</Link>
		<Link
			className={styles['cafe-menu-link-container-button']}
			activeClassName="cafe-menu-active"
			href="/cafe/menu/lunch"	
		>
			Lunch
		</Link>
		<Link
			className={styles['cafe-menu-link-container-button']}
			activeClassName="cafe-menu-active"
			href="/cafe/menu/dinner"	
		>
			Dinner
		</Link>
	</div>
);
