import React, { useState, useEffect } from 'react';
import context from './';
import * as service from '../services'

function Provider ({ children }) {
  const [ localData, setLocalData ] = useState([]); 

  useEffect(() => {
    service.setDataInLocalStorage();
  }, []);

  useEffect(() => {
    service.rescueLocalStorageToProvider('dataCards', setLocalData);
  }, [])

  const value = {
    localData,
    setLocalData
  }
  return(
    <context.Provider value={ value }>
      { children }
    </context.Provider>
  );
}

export default Provider;
