import { h, Component } from 'preact';
import styles from './home.scss';
import { Link } from 'preact-router/match';
import {getCafeHours} from '../../helpers/cafeTodaysHours';
import {getPantryHours} from '../../helpers/pantryTodaysHours';

const Home = () => (
	<div className={styles['home-container']}>
		<div className={styles['content-container']}>
			<div className={styles['home-content-container']}>
				<Link 
					className={styles['home-container-button']}
					href="/cafe"	
				>
					the Beehive Cafe
					<div className={styles['home-container-button-hours']}> 
						{getCafeHours()}
					</div>
				</Link>
				<img
					className={styles['home-container-logo']}
					src="/img/hivelogo.gif"
					alt="Beehive Blank logo"
				/>
				<Link 
					className={styles['home-container-button']}
					href="/pantry"	
				>
					the Beehive Pantry
					<div className={styles['home-container-button-hours']}> 
						{getPantryHours()}
					</div>
				</Link>
			</div>
			<Link className={styles['home-order-online-button']}>
				Order Online
			</Link>
		</div>
	</div>
);

export default Home;