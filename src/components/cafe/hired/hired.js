import { h, Component } from 'preact';
import styles from './hired.scss';


export const Hired = () => (
	<div className={styles['cafe-hired-container']}>
	
		<div className={styles['cafe-hired-text-container']}> 
				<div className={styles['cafe-hired-text']}> 
					<div className={styles['cafe-hired-title']}>
						Interested in Being A Worker Bee?
					</div>
					<div>
						To apply for work at The Beehive Cafe, please send a resume to 
						<a href="mailto:bristolbeehivejobs@gmail.com">
							bristolbeehivejobs@gmail.com.
						</a>
						<div>
							Tell us what position you're interested in and why you make a great candidate for a job with us.
						</div>
					</div>
				</div>
		</div>
	</div>
);

