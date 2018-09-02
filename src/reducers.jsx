import { combineReducers } from 'redux';

import globalReducer from './modules/global/globalReducer';
const reducers = combineReducers({ globalReducer });

export default reducers;
