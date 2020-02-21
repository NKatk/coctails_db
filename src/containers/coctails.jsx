import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoctail } from '../actions/coctailsAction';

import CoctailsComp from '../components/coctailsComp';

const Coctails = () => {
  const [status, setStatus] = useState(true);
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const { coctails } = useSelector((state) => state.coctails);
  const { listCoctails, choiceCoctails } = useSelector((state) => state.listCoctails);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, [coctails]);

  const eventScroll = () => {
    if (coctails.length + 1 <= choiceCoctails.length && !load) {
      setLoad(true);
      dispatch(getCoctail(listCoctails[choiceCoctails[coctails.length]].strCategory));
      setStatus(true);
    } else {
      setLoad(false);
      setStatus(false);
    }
  };

  return (
    <div>
      <CoctailsComp
        coctails={coctails}
        status={status}
        eventScroll={eventScroll}
        load={load}
      />
    </div>
  );
};

export default Coctails;
