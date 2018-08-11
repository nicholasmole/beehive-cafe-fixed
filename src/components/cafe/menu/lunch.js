import { h, Component } from 'preact';
import styles from './menu.scss';
import { Links } from './links/links';
import { Lunch as LunchMessage } from './serve/lunch';
import { List as LunchMenu } from './list/lunch/item';
import {list, soup} from './list/lunch/list';
import {SectionTitle} from './lunch/sectionTitle';

export const Menu = () => (
 <div className={styles['cafe-menu-container']}>
		<Links/>
		<LunchMessage/>
		<SectionTitle
			title="Beehive Classics"
			text=" sandwiches come with dressed greens or fried chickpeas. all of our breads are housemade. substitute gluten free flaxseed bread +$2"
		/>
		<LunchMenu
			list={list}
		/>
		<SectionTitle
			title="Soups, Salads & Sides"
			text="add a Baffoni's Farm grilled chicken breast to any salad for $4"
		/>
		<LunchMenu
			list={soup}
		/>
		<SectionTitle
			text="{ Daily Specials on Facebook}"
		/>
	</div>
);

export default Menu;