import { h, Component } from 'preact';
import styles from './hours.scss';

import {getPantryHours} from '../../../helpers/pantryTodaysHours';

export const Hours = () => (
	<div className={styles['cafe-hours-container']}>
		<div className={styles['cafe-container-button-hours']}> 
			<div>
				Today's Hours!:
			</div>
			{getPantryHours()}
		</div>
		<div className={styles['cafe-container-button-hours']}> 
			<div>
				Monday - Saturday
			</div>
			7:00 - 6:00
		</div>
		<div className={styles['cafe-container-button-hours']}> 
			<div>
				Sundays
			</div>
			7:00 - 4:00
		</div>
	</div>
);

