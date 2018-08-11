import { h, Component } from 'preact';
import styles from './offering.scss';
import {Title} from './title/title';

export const Offering = () => (
	<div className={styles['cafe-body-container']}>
		<div className={styles['pantry-body-container-title']}>
			<Title
				title="We will offer a variety of breads, pastries, salads and other prepared foods at The Pantry. We would also be happy to put together special orders for you. Please note: We make, bake and store our food in small batches. For that reason we appreciate being given as much notice as possible for large orders. Thanks! 
				"
			/>
		</div>
		<div className={styles['cafe-body-text']}>
			<span className={styles['pantry-body-text-bold']}>
				To Order the following items for pick up
			</span>
			<img 
			className={styles['pantry-cake-img']}
			src="/img/offering_cakes.jpg"
			alt="offering cakes"
		/>
		</div>
		<Title
			title="Please Call Us at 401-396-9060"
		/>
		
		<div className={styles['cafe-body-text']}>
			*items with an asterisk are (or can be made) gluten free. Please be advised that although we make nut-free and gluten-free items, this kitchen uses large amounts of wheat and nut products on a daily basis. If your allergy is severe, please let us know.
		</div>
		
	</div>
)