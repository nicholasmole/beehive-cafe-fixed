import { h, Component } from 'preact';
import { connect } from 'preact-redux';

import './app.css';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
});

class App extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    console.log('ddd')
      return (
        <div className="App">
          Hello React
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
