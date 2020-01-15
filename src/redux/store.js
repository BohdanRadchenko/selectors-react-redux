import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import timerReducer from "./timer/timerReducer";
import postsReducer from './posts/postsReducer'

const rootReducers = combineReducers({
  timer : timerReducer,
  posts : postsReducer
})

const store = createStore(rootReducers, devToolsEnhancer());

export default store