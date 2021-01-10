import React from 'react' 
import { useState } from 'react'

export default function Clock() {
    let time = new Date().toLocaleTimeString()

    const [Ctime, setTime] = useState(time);
    const updateTime = () => {
        time = new Date().toLocaleTimeString()
        setTime(time);
    }
    setInterval(updateTime, 100);
    return (
        <div>
            <h3>{time}</h3>
        </div>
    )
}
