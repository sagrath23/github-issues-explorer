import { combineReducers } from 'redux';
import { reducer as searchDomainReducer, actions as searchDomainActions } from './searchDomain'; 

export const rootReducer = combineReducers({
  search: searchDomainReducer
});

export const actions = {
  ...searchDomainActions
};