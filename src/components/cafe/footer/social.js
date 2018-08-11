import { h, Component } from 'preact';
import styles from './footer.scss';

export const Social = () => (
	<div className="social">
		<a href="http://www.facebook.com/pages/The-Beehive-Cafe/73413662432?ref=ts">
			<img src="/img/facebook.gif" border="none"/>
		</a>
		<a href="http://twitter.com/#!/beehivecafe">
			<img src="/img/twitter.gif" border="none"/>
		</a>
	</div>
);