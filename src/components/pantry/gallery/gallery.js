import { h, Component } from 'preact';
import styles from './gallery.scss';

const gall = [
	{
		img: '/img/brownies.jpg',
		alt: 'Delicious Brownies'
	},
	{
		img: '/img/cookies.jpg',
		alt: 'Delicious Cookies'
	},
	{
		img: '/img/food-case.jpg',
		alt: 'A case of food'
	},
	{
		img: '/img/front-of-shop.jpg',
		alt: 'Front of the store '
	},
	{
		img: '/img/front-of-store-case.jpg',
		alt: 'Front of the store case of food'
	},
	{
		img: '/img/salads.jpg',
		alt: 'A box of salads'
	},
	{
		img: '/img/sandwich.jpg',
		alt: 'Pantry Sandwiches'
	},
	{
		img: '/img/treat.jpg',
		alt: 'Pantry Treat'
	}
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