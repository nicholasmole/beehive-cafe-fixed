import {h, Component} from 'preact';
import styles from './logo.scss';

export const logo = () => (
	<div className={styles.header_logo_container}>
		<img
			src="/img/hivelogo.gif"
			alt="Beehive logo"
		/>
	</div>
);

export default logo;