import { SUBSCRIPTION } from './actions';

const initialState = {
    registeredUsers: []    
  };

  export default function rootReducer(state = initialState, action) {
    switch (action.type) {     
      case SUBSCRIPTION:
        return {
          ...state,
        };            
    //   case GET_USER_REGISTRED:
    //     return {
    //       ...state,
    //       registredUsers: action.payload
    //     };
      default:
        return state;
    }
  };