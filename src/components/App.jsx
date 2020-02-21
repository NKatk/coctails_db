import React from 'react';

import Header from './header';
import Coctais from '../containers/coctails';
import ListCoctails from '../containers/listCoctails';

const App = () => (
  <div className="main">
    <Header className="qq" />
    <div className="sort_content">
      <div className="sort">
        <ListCoctails />
      </div>
      <div className="content">
        <Coctais />
      </div>
    </div>
  </div>
);

export default App;
