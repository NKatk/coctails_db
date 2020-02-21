import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListCoctails, choiceCoctailsAction } from '../actions/listCoctailsAction';
import { resetCoctail } from '../actions/coctailsAction';

import ListCoctailsComp from '../components/listCoctailsComp';

const ListCoctails = () => {
  const dispatch = useDispatch();
  const { listCoctails, choiceCoctails } = useSelector((state) => state.listCoctails);

  useEffect(() => {
    dispatch(getListCoctails());
  }, []);// eslint-disable-line

  const choiceCoctailsFunc = (arr) => {
    dispatch(resetCoctail());
    dispatch(choiceCoctailsAction(arr));
  };

  return (
    <div>
      <ListCoctailsComp
        listCoctails={listCoctails}
        choiceCoctails={choiceCoctails}
        choiceCoctailsFunc={choiceCoctailsFunc}
        resetCoctail={resetCoctail}
      />
    </div>
  );
};

export default ListCoctails;
