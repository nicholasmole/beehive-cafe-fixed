import { h, Component } from 'preact';
import styles from './banner.scss';

export const Banner = () => (
	<div className={styles['banner-container']}>
		<img
			src="/img/pantry_heading_.gif"
		/>
	</div>
);

export default Banner;
