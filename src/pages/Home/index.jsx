import React, { useEffect } from 'react';
import data from '../../data';

function Home() {

  const setDataInLocalStorage = () => {
    localStorage.setItem('dataCards', JSON.stringify(data));
  };

  useEffect(() => {
    setDataInLocalStorage()
  }, []);

  return(
    <>
    <h1>Home</h1>
    <section>
     <img src="" alt=""/>
      <p></p>
    </section>
    </>
  );
}

export default Home;
