import {h, Component} from 'preact';

function withGetScreen(InputComponent) {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {
				sizeLimit: this.getSize(window.innerWidth),
				tabletLimitReached: this.isSmallerThanTestSize(window.innerWidth, 769),
				mobileLimitReached: this.isSmallerThanTestSize(window.innerWidth, 576)
			};
		}

		onResize = () => {
			const newSize = this.getSize(window.innerWidth);
			if (newSize !== this.state.sizeLimit) {
				this.setState({
					sizeLimit: newSize
				});
			}
			const tabletBreakSize = this.isSmallerThanTestSize(window.innerWidth, 769);
			if (tabletBreakSize !== this.state.tabletLimitReached) {
				this.setState({
					tabletLimitReached: tabletBreakSize
				});
			}
			const mobileBreakSize = this.isSmallerThanTestSize(window.innerWidth, 576);
			if (mobileBreakSize !== this.state.mobileLimitReached) {
				this.setState({
					mobileLimitReached: mobileBreakSize
				});
			}
		}

		getSize(size) {
			return (size <= 1030);
		}

		isSmallerThanTestSize(currentSize, limitSize) {
			return (currentSize <= limitSize);
		}

		componentDidMount() {
			window.addEventListener('resize', this.onResize);
			this.onResize();
		}

		componentWillUnmount() {
			window.removeEventListener('resize', this.onResize);
		}

		isLimit = () => {
			return this.state.sizeLimit;
		}

		isSmallerThanLimit = () => {
			return this.state.tableLimitReached;
		}

		isMobileLimit = () => {
			return this.state.mobileLimitReached;
		}

		render() {
			const detectMethods = {isSmallerThanLimit: this.state.tabletLimitReached};
			return <InputComponent {...detectMethods} {...this.props}/>;
		}
	};
}

export default withGetScreen;
