import { h, Component } from 'preact';
import styles from './body.scss';
import {Title} from './title/title';

export const Body = () => (
	<div className={styles['cafe-body-container']}>
		<Title
			megaTitle="Now Open!"
			title="Come visit us at 87 Gooding Ave"
		/>
		<div className={styles['cafe-body-text']}>
			<span className={styles['pantry-body-text-bold']}>
				Our exciting new venture in Bristol! 
			</span>
			A Combination Espresso bar, bread bakery, pastry shop and prepared food counter
		</div>
		<div className={styles['cafe-body-text-lower']}>
			<div>
				We are building on our reputation for great coffee and baked goods, adding lunch items and whole loaves of bread and some food for you to take home for dinner.
			</div>
		</div>
		<Title
			title="Bread Baked Daily. Fresh doughnuts on Saturdays."
		/>
		<div className={styles['cafe-body-text']}>
			<span className={styles['pantry-body-text-bold']}>
				Prepared: 
			</span>
		</div>
		<div className={styles['cafe-body-text']}>
		Too busy to cook? We have you covered!

		There will be a constantly evolving menu of prepared foods available at The Pantry.

		On a daily basis you can stop in to choose from a selection of: Soup, Fresh and Seasonal Salads, Cooked Meat Dishes, Vegetarian, Vegan and Gluten Free Options and of course our Baked Goods. This menu will change constantly so be sure to stop in to see what the day holds.
		</div>
		<div className={styles['cafe-body-text']}>
			If you are planning to feed a larger group, please talk to us ahead of time.
		</div>
	</div>
)