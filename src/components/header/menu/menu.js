import {h, Component} from 'preact';
import styles from './menu.scss';
import Button from '../menu/button/button';
import menuStyle from './button/button.scss';

const isOpen = open => open ? `${styles.open}` : ``;

export const menu = ({open, action}) => (
	<div className={`${styles.header_menu_container} ${isOpen(open)}`}>
		<div className={`${styles.header_menu} ${isOpen(open)}`}>
			<img
				src="/img/hivelogo.gif"
				alt="CJ carpentry logo"
			/>
			<Button
				link="/cafe"
				text="Home"
				action={action}
			/>
			<Button
				link="/cafe/menu/breakfast"
				text="Menu"
				action={action}
			/>
			<Button
				link="/cafe/gallery"
				text="Gallery"
				action={action}
			/>
			<Button
				link="/pantry"
				text="To The Pantry"
				action={action}
			/>
			<a href="https://mkt.com/the-beehive-cafe" className={styles['header_menu_button_order_button']}>
				Order Online
			</a>
		</div>
	</div>
);

export default menu;