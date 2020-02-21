import axios from 'axios';
import { PUSH_COCTAILS, RESET_COCTAILS } from '../constants';

const pushCoctail = (data) => (
  {
    type: PUSH_COCTAILS,
    payload: data,
  }
);

export const resetCoctail = () => (
  {
    type: RESET_COCTAILS,
  }
);

export const getCoctail = (name) => (dispatch) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${name}`;
  axios.get(url)
    .then((result) => {
      dispatch(pushCoctail({ [name]: result.data.drinks }));
    });
};
