import React from 'react';
import { Waypoint } from 'react-waypoint';

const CoctailsComp = ({
  coctails, status, eventScroll, load,
}) => {
  if (!coctails.length && !load) {
    eventScroll();
    return (
      <div>{null}</div>
    );
  }

  return (
    <div className="coctails">
      {coctails.map((item) => (
        <div key={Object.keys(item)[0]} className="coctail_group">
          <div className="coctail_group_title">
            <h2>
              {Object.keys(item)[0]}
            </h2>
          </div>
          <div className="coctail_group_cards">
            {item[Object.keys(item)[0]].map((itemC) => (
              <div key={itemC.strDrink} className="coctail_card">
                <img src={itemC.strDrinkThumb} alt={itemC.strDrink} />
                <h3>{itemC.strDrink}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
      {
        !status
          ? <div className="finish">All cocktails viewed!</div>
          : load
            ? <div>{null}</div>
            : <Waypoint onEnter={eventScroll} />
      }
    </div>
  );
};

export default CoctailsComp;
