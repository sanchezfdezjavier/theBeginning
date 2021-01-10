import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { INCREMENT, DECREMENT } from './redux/actions'

import PatientInput from './components/PatientInput'
import List from './components/List'
import Clock from './components/Clock'

function App(props) {

  return (
    <div className="App">
      {console.log(props)}
      <h1>Optihealth</h1>
      <Clock/>
      <PatientInput/>
      <div>
        <List/>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      ...state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: INCREMENT}),
    onDecrementCounter: () => dispatch({type: DECREMENT})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
