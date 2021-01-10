import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { INCREMENT, DECREMENT } from './redux/actions'

import PatientInput from './components/PatientInput'
import List from './components/List'

function App(props) {

  return (
    <div className="App">
      {console.log(props)}
      <h1>Optihealth</h1>
      <h2>{props.counter}</h2>
      <button onClick={props.onIncrementCounter}>Add</button>
      <button onClick={props.onDecrementCounter}>Less</button>
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
