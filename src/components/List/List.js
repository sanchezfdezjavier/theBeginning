import React from 'react'
import { connect } from 'react-redux'

import '../../App.css'
import './List.css'

export const List = (props) => {
    const queue  = props.queueReducer.queue;
    const listFill = queue.map((patient) => {
        return <div className="container patient" key={patient.id}>{patient.name}  {patient.id}  {patient.rgstrTime}</div>
    })
    return (
        <div>
            <div>
                {listFill}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, null)(List)
