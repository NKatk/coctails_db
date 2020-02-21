import { GET_LIST_COCTAILS, CHOICE_COCTAILS } from '../constants';

const initialState = {
  listCoctails: [],
  choiceCoctails: [],
};

const listCoctailsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_COCTAILS:
      return {
        ...state,
        listCoctails: action.payload,
      };

    case CHOICE_COCTAILS:
      return {
        ...state,
        choiceCoctails: action.payload,
      };

    default:
      return state;
  }
};

export default listCoctailsReducers;
