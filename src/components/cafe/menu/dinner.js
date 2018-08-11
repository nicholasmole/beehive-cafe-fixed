import { h, Component } from 'preact';
import styles from './menu.scss';
import { Links } from './links/links';
import { Dinner as DinnerMessage } from './serve/dinner';
import { List as LunchMenu } from './list/lunch/item';
import {apps, plat, entrees, sandwich} from './list/dinner/list';
import {SectionTitle} from './lunch/sectionTitle';

export const Menu = () => (
 <div className={styles['cafe-menu-container']}>
		<Links/>
		<DinnerMessage/>
		<SectionTitle
			title="Appetizers"
		/>
		<LunchMenu
			list={apps}
		/>
		<SectionTitle
			title="Platters and Salads"
			text=" add grilled chicken breast, house cured salmon or Daniele prosciutto for $5"
		/>
		<LunchMenu
			list={plat}
		/>
		<SectionTitle
			title="Entrees"
		/>
		<LunchMenu
			list={entrees}
		/>
		<SectionTitle
			title="Sandwiches"
			text=" sandwiches come with dressed greens, fried chickpeas or roasted potatoes. all breads are housemade. substitute gluten free flax bread +$2"
		/>
		<LunchMenu
			list={sandwich}
		/>
	</div>
);

export default Menu;