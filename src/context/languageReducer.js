
/**
* @param {{ language:string }} state
* @param {{ payload:string }} action
*/
    export const languageReducer = (state, action) => {
     switch(action.type){
        case "CHANGE_LANGUAGE":
           return { language:action.payload  }
        default: return state
     }
  }