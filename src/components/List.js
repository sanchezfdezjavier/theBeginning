import React from 'react'
import { connect } from 'react-redux'

export const List = (props) => {
    const queue  = props.queueReducer.queue;
    const listFill = queue.map((patient) => {
        return <li>{patient.name}  {patient.id}</li>
    })
    return (
        <div>
            <ul>
                {listFill}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

export default connect(mapStateToProps, null)(List)
