import {hours} from './pantryHoursSwitch';
export const getPantryHours = () => {
	var d = new Date();
	var n = d.getDay()
	 return hours[n];
}