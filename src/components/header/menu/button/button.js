import {h, Component} from 'preact';
import styles from './button.scss';
import { route } from 'preact-router';

export const button = ({link, text, action}) => (
	<div className={styles.header_menu_button} onClick={() => {route(link); action() }}>
		{text}
	</div>
);

export default button;