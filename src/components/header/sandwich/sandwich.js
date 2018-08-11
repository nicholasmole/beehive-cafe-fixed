import {h, Component} from 'preact';
import styles from './sandwich.scss';

const isOpen = open => open ? `${styles.open}` : ``;

export const sandwich = ({action, open}) => (
	<div onClick={() => action()} className={`${styles.header_sandwich_container} ${isOpen(open)}`}>
		<div className={`${styles.header_sandwich} ${isOpen(open)}`}></div>
	</div>
);

export default sandwich;