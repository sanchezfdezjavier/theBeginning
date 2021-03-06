import React from 'react'
import { connect } from 'react-redux'

import '../../App.css'
import './List.css'

import avatarImg from '../../assets/avatar.png'

export const List = (props) => {
    const queue  = props.queueReducer.queue;
    const listFill = queue.map((patient) => {
        return <div className="container patient" key={patient.id}>
                    <img className="avatar" src={avatarImg} alt="avatar"/>
                    {patient.name}    {patient.id} {patient.rgstrTime}
               </div>
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
