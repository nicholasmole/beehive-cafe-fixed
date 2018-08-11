import { h, Component } from 'preact';
import styles from './sectionTitle.scss';

export const SectionTitle = ({title, text}) => (
	<div className={styles['lunch-sectionTitle']}>
		<div className={styles['lunch-sectionTitle-title']}>
			{title}
		</div>
		<div className={styles['lunch-sectionTitle-text']}>
			{text}
		</div>
	</div>
);

export default SectionTitle;