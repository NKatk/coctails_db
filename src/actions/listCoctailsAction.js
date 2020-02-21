import axios from 'axios';
import { GET_LIST_COCTAILS, CHOICE_COCTAILS } from '../constants';

export const listCoctailsAction = (data) => (
  {
    type: GET_LIST_COCTAILS,
    payload: data,
  }
);

export const choiceCoctailsAction = (data) => (
  {
    type: CHOICE_COCTAILS,
    payload: data,
  }
);

export const getListCoctails = () => (dispatch) => {
  axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((result) => {
      dispatch(listCoctailsAction(result.data.drinks));
      const arr = [];
      for (let i = 0; result.data.drinks.length > i; i++) {
        arr.push(i);
      }
      dispatch(choiceCoctailsAction(arr));
    });
};
