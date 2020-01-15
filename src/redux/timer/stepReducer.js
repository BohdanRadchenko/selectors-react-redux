import {Type} from "./timerActions";

const stepReducer = (store = {value: 5, label: '5'}, action) => {
  switch (action.type) {
    case Type.CHANGE_STEP :
      return action.payload
    default :
      return store
  }
}

export default stepReducer