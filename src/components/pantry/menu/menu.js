import { h, Component } from 'preact';
import { List } from './list/item';
import {
	catering,
	pastries,
	cakes,
	pies
} from './list/dinner/list';
import styles from './menu.scss';

export const Menu = () => (
 <div className={styles['cafe-menu-container']}>
		<List
			list={catering}
		/>
		<List
			list={pastries}
		/>
		<List
			list={cakes}
		/>
		<List
			list={pies}
		/>
	</div>
);

export default Menu;