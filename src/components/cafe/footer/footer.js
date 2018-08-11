import { h, Component } from 'preact';
import styles from './footer.scss';
import {Social} from './social';

const Divider = () => <div className={styles['cafe-footer-info-divider']}>|</div>

export const Footer = () => (
	<div className={styles['cafe-footer-container']}>
		<Social/>
		<div className={styles['cafe-footer']}>
			<div className={styles['cafe-footer-info-container']}>
				<div>
					10 Franklin Street
				</div>
				<Divider/>
				<div>
					Bristol RI 02809
				</div>
				<Divider/>
				<div>
					<a href="tel:4013969994">
						401.396.9994
					</a>
				</div>
				<Divider/>
				<div>
					<a href="mailto:JEN@THEBEEHIVECAFE.COM">
						JEN@THEBEEHIVECAFE.COM 
					</a>
				</div>
			</div>
			<div className={styles['cafe-footer-by-container']}>
				<div className={styles['cafe-footer-by']}>
					Website Design by: CARA NAYLOR
				</div>
				<div className={styles['cafe-footer-by']}>
					Website Developed by: Mole
				</div>
				<div className={styles['cafe-footer-by']}>
					Photography by:  PAUL CHIERA
				</div>
			</div>
		</div>
	</div>
);

