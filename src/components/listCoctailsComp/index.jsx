import React, { useState, useEffect } from 'react';
import { FaRegCheckSquare, FaRegSquare } from 'react-icons/fa';

const ListCoctailsComp = ({
  listCoctails,
  choiceCoctails,
  choiceCoctailsFunc,
  resetCoctail,
}) => {
  const [choicedCoctails, setChoicedCoctails] = useState([]);

  useEffect(() => {
    setChoicedCoctails(choiceCoctails);
  }, [choiceCoctails]);

  const addIndexCoctailce = (i) => {
    const arr = [...choicedCoctails];
    arr.push(i);
    arr.sort((a, b) => a - b);
    setChoicedCoctails(arr);
  };

  const removeIndexCoctailce = (i) => {
    const index = choicedCoctails.indexOf(i);
    const arr = [...choicedCoctails];
    arr.splice(index, 1);
    setChoicedCoctails(arr);
  };

  return (
    <div className="sort_block">
      <div className="sort_types">
        {
          listCoctails.map((item, i) => (
            <div key={item.strCategory} className="item_type">
              {
                choicedCoctails.indexOf(i) !== -1
                  ? <FaRegCheckSquare onClick={() => removeIndexCoctailce(i)} />
                  : <FaRegSquare onClick={() => addIndexCoctailce(i)} />
              }
              <span>{item.strCategory}</span>
            </div>
          ))
        }
        <button
          disabled={choicedCoctails === choiceCoctails}
          type="button"
          onClick={() => {
            resetCoctail();
            choiceCoctailsFunc(choicedCoctails);
          }}
        >
          <span>APPLY</span>
        </button>
      </div>
    </div>
  );
};

export default ListCoctailsComp;
