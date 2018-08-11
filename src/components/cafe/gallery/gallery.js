import { h, Component } from 'preact';
import styles from './gallery.scss';

const gall = [
	{
		img: '/img/cheese-platter.jpg',
		alt: 'A cheese Plate'
	},
	{
		img: '/img/sandwich-and-salad.jpg',
		alt: 'A Sandwich and a Salad'
	},
	{
		img: '/img/ham-sliced.jpg',
		alt: 'Ham being sliced'
	},
	{
		img: '/img/pastries.jpg',
		alt: 'Pastries on display'
	},
	{
		img: '/img/the-cafe.jpg',
		alt: 'The Beehive Cafe'
	},
	{
		img: '/img/people-smiling.jpg',
		alt: 'People Smiling'
	},
	{
		img: '/img/display-food.jpg',
		alt: 'Display Food'
	},
	{
		img: '/img/cinnabun.jpg',
		alt: 'Cinnabun'
	},
	{
		img: '/img/the-diner.jpg',
		alt: 'The Diner with people eating'
	},
	{
		img: '/img/display-food2.jpg',
		alt: 'More Display Food'
	},
	{
		img: '/img/giant-cookie.jpg',
		alt: 'Giant Baked Good'
	},
	{
		img: '/img/treats.jpg',
		alt: 'Treats'
	},
	{
		img: '/img/dinner.jpg',
		alt: 'A Dinner'
	},
]
class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imageCount: 2
		}
		this.scrollWatcher = this.scrollWatcher.bind(this);
	}

	scrollWatcher(){
		const gal = document.querySelector('.cafe-gallery-container');
		const galBottom = gal.getBoundingClientRect().bottom;
		const galFromTop = (galBottom - gal.offsetTop - 132);
		if (galFromTop <= 0) {
			this.setState(prevState => ({
				imageCount: prevState.imageCount + 3
			}))
		}
	}

	componentDidMount() {
		document.addEventListener('scroll', this.scrollWatcher);
	}
	componentWillUnmount() {
		document.removeEventListener('scroll', this.scrollWatcher);
	}

	returnImage() {
		const {
			imageCount
		} = this.state;
		let response = [];
		
		for (let i = 0; i <= imageCount && i < gall.length; i++ ) {
			response.push (
				<img 
					src={gall[i].img}
				/>
			)
		}
		return response;
	}

	render() {
		const {
			imageCount
		} = this.state;
		return (
			<div className={styles['cafe-gallery-container']}>
				{this.returnImage()}
			</div>
		);
	}
};

export default Gallery;