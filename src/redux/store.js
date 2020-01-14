import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import timerReducer from "./timerReducer";

const rootReducers = combineReducers({
  timer : timerReducer,
})

const store = createStore(rootReducers, devToolsEnhancer());

export default store