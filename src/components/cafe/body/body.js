import { h, Component } from 'preact';
import styles from './body.scss';
import {Dots} from '../dots/dots';

export const Body = () => (
	<div className={styles['cafe-body-container']}>
		<div className={styles['cafe-body-text']}>
		<span className={styles['cafe-body-text-bold']}>WELCOME</span> to the Beehive Cafe - a bustling cafe & restaurant located in the heart of downtown Bristol, overlooking Independence Park & Bristol Harbor. We are in a small two-story space with cozy seating inside and lots of room to spread out on our front patio and upstairs balcony when the weather is nice!
		</div>
		<Dots/>
		<div className={styles['cafe-body-text-lower']}>
		<div>
			<span className={styles['cafe-body-text-bold']}>
				We serve:
			</span>
			<br/>
		</div>
			<div>
				<span className={styles['cafe-body-text-bold']}>
					Breakfast & Lunch: 
				</span> daily until 3:30
			</div>
			<div>
				<span className={styles['cafe-body-text-bold']}>
					Dinner:   
				</span>
				   Thursday, Friday & Saturday nights
			</div>

			<div>
				
				A variety of <span className={styles['cafe-body-text-bold']}>tasty pastries, pies & cakes</span>
			</div>

			<div>
				New harvest <span className={styles['cafe-body-text-bold']}> coffee and espresso drinks</span>
			</div>
			<div>
				<span className={styles['cafe-body-text-bold']}>
					Serendipitea teas
				</span> (some organic and fair trade)
			</div>
			<div>
				An ecclectic offering of
				<span className={styles['cafe-body-text-bold']}> beer & wine</span>
			</div>
			<div>
				A seasonally changing and locally sourced menu
			</div>
		</div>
	</div>
)