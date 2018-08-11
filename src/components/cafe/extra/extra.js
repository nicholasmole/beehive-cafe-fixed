import { h, Component } from 'preact';
import styles from './extra.scss';


export const Extra = () => (
	<div className={styles['cafe-extra-container']}>
	
		<div className={styles['cafe-extra-button-image-container']}> 
			<div className={styles['cafe-extra-set-container']}> 
				<img 
					src="/img/barter.gif"
					alt="Beehive Barter"
				/>
				<div className={styles['cafe-extra-button-extra']}> 
					<div>
						Trade us your homegrown produce for credit on your personal Beehive Barter account - which you can then redeem for anything in the cafe. Contact us to see what we are currently accepting.

					</div>
				</div>
			</div>
			<div className={styles['cafe-extra-set-container']}> 
				<img 
					src="/img/bestof.gif"
					alt="Beehive Barter"
				/>
				<div className={styles['cafe-extra-button-extra']}> 
					<div>
						Best New Coffee Shop in 2008 Best Lunch (East Bay) in 2010, 2011 and 2016
					</div>
				</div>
			</div>
		</div>
	</div>
);

