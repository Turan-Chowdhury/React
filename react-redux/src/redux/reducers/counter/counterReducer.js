import * as Types from '../../types/types'

const initializeState = {
    counter : 0
  }
  
  function counterReducer(state = initializeState, action) {
  
    switch(action.type){
  
      case Types.INC:
        const updated_value = typeof(action.payload)==="undefined"? 1 : parseInt(action.payload);
        return {
          ...state,
          counter : state.counter + updated_value
        } 
  
      case Types.DEC:      
        return {
          ...state,
          counter : state.counter - 1
        } 
  
      case Types.UPDATE:
        return {
          ...state,
          counter : parseInt(action.payload)
        } 
  
      // case "INC_SPECIFIC":
      //   return {
      //     ...state,
      //     counter : state.counterReducer.counterReducer.counter + parseInt(action.payload)
      //   } 
  
      default:
        break;
  
    }
  
    return state;
  }

  export default counterReducer;