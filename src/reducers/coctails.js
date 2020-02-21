import { PUSH_COCTAILS, RESET_COCTAILS } from '../constants';

const initialState = {
  coctails: [],
};

const coctailsReducers = (state = initialState, action) => {
  switch (action.type) {
    case PUSH_COCTAILS:
      return {
        ...state,
        coctails: [...state.coctails].concat(action.payload),
      };

    case RESET_COCTAILS:
      return {
        ...state,
        coctails: [],
      };

    default:
      return state;
  }
};

export default coctailsReducers;
