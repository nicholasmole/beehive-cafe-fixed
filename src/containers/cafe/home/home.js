import { h, Component } from 'preact';
import styles from '../cafe.scss';
import {Banner} from '../../../components/cafe/banner';
import {Body} from '../../../components/cafe/body/body';
import {Hours} from '../../../components/cafe/hours/hours';
import {Extra} from '../../../components/cafe/extra/extra';
import {Hired} from '../../../components/cafe/hired/hired';
import ResizeChecker from '../../../components/screen/screen';

const Home = ({isSmallerThanLimit}) => (
	<div className={styles['cafe-container']}>
	{console.warn(isSmallerThanLimit)}
		<Banner/>
		<Body/>
		{
			isSmallerThanLimit &&
			<Hours/>
		}
		<Extra/>
		{
			!isSmallerThanLimit &&
			<Hours/>
		}
		<Hired/>
	</div>
);

export default ResizeChecker(Home);