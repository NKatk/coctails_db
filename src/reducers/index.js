import { combineReducers } from 'redux';

import coctailsReducers from './coctails';
import listCoctailsReducers from './listCoctails';

const rootReducer = combineReducers({
  coctails: coctailsReducers,
  listCoctails: listCoctailsReducers,
});

export default rootReducer;
