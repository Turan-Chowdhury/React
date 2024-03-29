import { increment_value, decrement_value } from "../types"

const initailState = {
    count : 0
}

export default function counterReducer(state = initailState, action) {

    switch(action.type){

        case increment_value:
            return{
                ...state,
                count : state.count + action.payload
            }

        case decrement_value:
            return{
                ...state,
                count : state.count - action.payload
            }

        default:
            return state
    }
}