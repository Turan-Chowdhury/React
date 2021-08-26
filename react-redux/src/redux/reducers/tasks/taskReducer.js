import * as Types from '../../types/types'

const initializeState = {
    tasks : [],
    taskForm : {
        _id : null,
        Title : '',
        Priority : ''
    }
  }
  
  function taskReducer(state = initializeState, action) {
  
    switch(action.type){
  
      case Types.ADD_TASKS:
        return {
          ...state,
          tasks : action.payload,
          taskForm : {
            _id : null,
            Title : '',
            Priority : ''
          }
        } 

      case Types.GET_TASK_DETAIL:
        return {
          ...state,
          taskForm : action.payload,
        }

      case Types.UPDATE_TASK_FORM:

        const taskForm = { ...state.taskForm };
        taskForm[action.payload.name] = action.payload.value;
        return {
          ...state,
          taskForm
        }
  
      default:
        break;
  
    }
  
    return state;
  }

  export default taskReducer;