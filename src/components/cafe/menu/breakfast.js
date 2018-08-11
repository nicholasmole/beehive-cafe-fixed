import { h, Component } from 'preact';
import styles from './menu.scss';
import { Links } from './links/links';
import { BF as BreakfastMessage } from './serve/bf';
import { List as BreakfastMenu } from './list/item';

export const Menu = () => (
 <div className={styles['cafe-menu-container']}>
		<Links/>
		<BreakfastMessage/>
		<BreakfastMenu/>
	</div>
);

export default Menu;