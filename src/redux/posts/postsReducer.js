import {combineReducers} from "redux";
import {ActionsType} from './postsActions'

const itemsReducer = (state = [], {type, payload}) => {
  switch (type) {
    case ActionsType.FETCH_POSTS :
      return payload;
    case ActionsType.DELETE_POST :
      return state.filter(el => el.id !== payload);
    default:
      return state
  }
};

const tagReducer = (state = 'all', {type, payload}) => {
  switch (type) {
    case ActionsType.CHANGE_TAG :
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  teg: tagReducer
})