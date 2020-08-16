import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Calculate from './Calculate';
import CountDown from './CountDown';
import LogInfo from './LogInfo';
import LogItem from './LogItem';
import Home from './Home';
import getDataFromDb from '../function/server/get';

function NavRoute() {
  const [data, setData] = useState(null);
  let fetchData = async () => {
    let newData = await getDataFromDb({}, 'product_module');
    setData(newData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  // console.log(performSignIn());
  let [calcArr, setCalcArr] = useState([]);
  // console.log(calcArr);

  let changeCalcHandler = (arr) => {
    setCalcArr((prev) => [...prev, arr]);
  };

  return (
    <Switch>
      <Route exact path='/'>
        <Home data={data} fetchData={fetchData} />
      </Route>
      <Route path='/calc'>
        <h1>calculate</h1>
        <Calculate onCalcChange={changeCalcHandler} />
      </Route>
      <Route path='/count'>
        <CountDown number={100} />
      </Route>
      <Route exact path='/log'>
        <LogInfo resoultArr={calcArr} />
      </Route>
      <Route path='/log/:id' component={LogItem} />
    </Switch>
  );
}

export default NavRoute;
