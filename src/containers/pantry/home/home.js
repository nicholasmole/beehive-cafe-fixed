import { h, Component } from 'preact';
import {Banner} from '../../../components/pantry/banner';
import {Body} from '../../../components/pantry/body/body';
import {Hours} from '../../../components/pantry/hours/hours';
import {Extra} from '../../../components/cafe/extra/extra';
import {Hired} from '../../../components/cafe/hired/hired';

const Home = () => (
	<div>
		<Banner/>
		<Body/>
		<Hours/>
	</div>
);

export default Home;