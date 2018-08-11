import {hours} from './cafeHoursSwitch'
export const getCafeHours = () => {
	var d = new Date();
	var n = d.getDay()
	 return hours[n];
}