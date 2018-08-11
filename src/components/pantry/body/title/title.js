import { h, Component } from 'preact';
import styles from '../body.scss';


export const Title = ({megaTitle, title}) => (
	<div className={styles['pantry-body-title-container']}>
		<div className={styles['cafe-body-title-text']}>
			<span className={styles['cafe-body-mega-title-text-bold']}>
				{megaTitle}
			</span> 
			{title}
		</div>
	</div>
);
	
	