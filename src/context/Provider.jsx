import React, { useState, useEffect } from 'react';
import context from './context';
import * as service from '../services'

function Provider ({ children }) {
  const [ data, setData] = useState([]); 

  useEffect(() => {
    service.setDataInLocalStorage();
  }, []);

  useEffect(() => {
    service.rescueLocalStorageToProvider('dataCards', setData);
  }, [data])

  const value = {
    data,
    setData
  }
  return(
    <context.Provider value={ value }>
      { children }
    </context.Provider>
  );
}

export default Provider;
