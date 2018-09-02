import { combineReducers } from 'redux';

import globalReducer from './app/global/globalReducer';
const reducers = combineReducers({ globalReducer });

export default reducers;
