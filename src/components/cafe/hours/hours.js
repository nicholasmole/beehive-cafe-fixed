import { h, Component } from 'preact';
import styles from './hours.scss';

import {getCafeHours} from '../../../helpers/cafeTodaysHours';

export const Hours = () => (
	<div className={styles['cafe-hours-container']}>
	
		<div className={styles['cafe-container-button-hours']}> 
			<div>
				Today's Hours!:
			</div>
			{getCafeHours()}
		</div>
		<div className={styles['cafe-container-button-hours']}> 
			<div>
				Sunday - Wednesday
			</div>
			7:00 - 4:00
		</div>
		<div className={styles['cafe-container-button-hours']}> 
			<div>
				Thursday - Saturday
			</div>
			7:00 - 9:00
		</div>

		<div className={styles['cafe-container-button-extra']}> 
			<div>
				Please Note: The kitchen closes every day @ 3:30 PM
			</div>
			<div>
				On Thurs, Fri & Sat it reopens from 5 PM til 9 PM for dinner service.
			</div>
		</div>
	</div>
);

