import { INCREMENT, DECREMENT, ADD_PATIENT, REMOVE_PATIENT } from './actions'

const getInitialTime = () => {
     const initialTime = new Date().toLocaleTimeString()
     return initialTime
}

export const initialState = {
    counter: 0,
    queue: [{name: "John", rgstrTime: getInitialTime(),  id: 34354}]
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:             
            return {
                ...state,
                counter: state.counter + 1 
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
    
        default:
            return state
    }
}

export const queueReducer = (state = initialState, action ) => {
    switch (action.type) {
        case ADD_PATIENT:
            return {
                ...state,
                queue: [...state.queue].concat(action.newPatient)
            }
        case REMOVE_PATIENT:
            const newQueue = state.queue.filter(patient => {
                return patient.id !== action.patientId
            })
            return {
                ...state,
                queue: newQueue
            }
        default:
            return state
    }
}
