import {h, Component} from 'preact';
import styles from './header.scss';
import Logo from '../../components/header/logo/logo';
import Sandwich from '../../components/header/sandwich/sandwich';
import Menu from '../../components/header/menu/menu';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}
	
	openMenu = () => {
		this.setState(prevState => ({
			open: !prevState.open
		}))
	}

	closeMenu = () => {
		this.setState(prevState => ({
			open: false
		}))
	}

	render() {
		const {
			open
		} = this.state;
		return (
			<header>
				<div className={styles['header-container-container']}>
					<Logo/>
					<Sandwich 
						action={this.openMenu}
						open={open}
					/>
					<Menu
						action={this.closeMenu}
						open={open}
					/>
				</div>
			</header>
		);
	}
}

export default Header;
