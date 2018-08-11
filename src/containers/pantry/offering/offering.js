import { h, Component } from 'preact';
import {Banner} from '../../../components/pantry/banner';
import {Offering} from '../../../components/pantry/offering/offering';
import {Menu} from '../../../components/pantry/menu/menu';


const Offer = () => (
	<div>
		<Banner/>
		<Offering/>
		<Menu/>
	</div>
);

export default Offer;