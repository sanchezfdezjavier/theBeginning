import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADD_PATIENT, REMOVE_PATIENT } from '../redux/actions'

export class PatientInput extends Component {
    state = {
        patientName: "",
        id: 0
    }

    getNow = () => {
        const now = new Date().now()
        return now
    }

    getCurrentTime = () => {
        const currentTime = new Date().toLocaleTimeString()
        return currentTime
    }

    patientNameChangedHandler = (event)=> {
        this.setState({patientName: event.target.value})
    }

    getRandomId = () => {
        return Math.floor(1000 + Math.random() * 9000);
    }

    render() {
        return (
            <div>
                <input placeholder="Your name"
                       type="text"
                       onChange={this.patientNameChangedHandler}
                       value={this.state.name}
                       />
                <p>{this.state.patientName}</p>
                <p>{console.log(this.props.state)}</p>
                <button onClick={() => this.props.onCreatePatient(this.state.patientName, this.getCurrentTime(), this.getRandomId())}>
                    Add Patient
                </button>
                <button disabled={this.props.queueReducer.queue.length === 0} onClick={() => {
                    this.props.onDeletePatient(this.props.queueReducer.queue[0]?.id)
                }}>
                    Delete first Patient
                </button>
                <p>Patient to delete: {this.props.queueReducer.queue[0]?.id}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreatePatient: (name, time, id) => dispatch({type: ADD_PATIENT, newPatient: {name, rgstrTime: time, id}}),
        onDeletePatient: (patientId) => dispatch({type: REMOVE_PATIENT, patientId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientInput);
