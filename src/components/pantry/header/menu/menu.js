import {h, Component} from 'preact';
import styles from './menu.scss';
import Button from '../menu/button/button';
import menuStyle from './button/button.scss';

const isOpen = open => open ? `${styles.open}` : ``;

export const menu = ({open, action}) => (
	<div className={`${styles.header_menu_container} ${styles['header-flex-pantry']} ${isOpen(open)}`}>
		<div className={`${styles.header_menu} ${isOpen(open)}`}>
			<img
				src="/img/hivelogo.gif"
				alt="CJ carpentry logo"
			/>
			<Button
				link="/pantry"
				text="Home"
				action={action}
			/>
			<Button
				link="/pantry/offerings"
				text="Offerings"
				action={action}
			/>
			<Button
				link="/pantry/gallery"
				text="Gallery"
				action={action}
			/>
			<Button
				link="/cafe"
				text="To The Cafe"
				action={action}
			/>
			<a href="https://squareup.com/store/the-beehive-pantry" className={styles['header_menu_button_order_button']}>
				Order Ahead
			</a>
			<a href="https://mkt.com/the-beehive-cafe" className={styles['header_menu_button_order_button']}>
				Gift Certificates
			</a>
		</div>
	</div>
);

export default menu;