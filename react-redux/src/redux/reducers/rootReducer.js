import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import taskReducer from "./tasks/taskReducer";

const rootReducer = combineReducers({
    counterReducer,
    taskReducer
}) 

export default rootReducer;