import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import './app.scss';

import {Router, route} from 'preact-router';

import Loadable from 'react-loadable';
import Loading from '../../components/loading/loading';

const AsyncHome = Loadable({
	loader: () => import('../home/home'),
	loading: Loading
});

const AsyncCafe = Loadable({
	loader: () => import('../cafe/cafe'),
	loading: Loading
});

const AsyncPantry = Loadable({
	loader: () => import('../pantry/pantry'),
	loading: Loading
});


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
});

class App extends Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount() {
    const preApp = document.querySelector('.PreApp');
    preApp.parentNode.removeChild(preApp);
  }

  render() {
    console.warn(this.props);
      return (
        <div className="App">
          <Router>
					  <AsyncHome path="/"/>
					  <AsyncCafe path="/cafe"/>
					  <AsyncCafe path="/cafe/:id"/>
					  <AsyncCafe path="/cafe/menu/:id"/>
            <AsyncPantry path="/pantry"/>
            <AsyncPantry path="/pantry/:id"/>
            <AsyncHome default/>
          </Router>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
