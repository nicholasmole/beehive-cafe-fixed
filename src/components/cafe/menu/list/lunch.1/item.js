import { h, Component } from 'preact';
import styles from './item.scss';
import {Dots} from '../../dots/dots';
import {bf_list} from './bf_list';

export const List = () => (
 <div className={styles['cafe-list-container']}>
		{
			bf_list.map(food => (
				<div key={food.name} className={styles['cafe-list-food-container']}>
					<div className={styles['cafe-list-food-title']}>
						{food.name}
					</div>
					{
						food.desc.map(desc => (
							<div className={styles['cafe-list-food-desc']}>
								<div className={styles['cafe-list-food-desc-text']}>
									{desc.text} 
								</div>
								<div className={styles['cafe-list-food-desc-price']}>
									{desc.price} 
								</div>
							</div>
						))
					}
					<Dots/>
				</div>
			))
		}
	</div>
);
