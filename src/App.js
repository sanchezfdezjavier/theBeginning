import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { INCREMENT, DECREMENT } from './redux/actions'

import PatientInput from './components/PatientInput'
import List from './components/List/List'
import Clock from './components/Clock'
import avatarImg from './assets/avatar.png'

function App(props) {

  return (
    <div className="App">
      {console.log(props)}
      <h1>Optihealth</h1>
      <img className="avatar" src={avatarImg} alt="avatar"/>
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
