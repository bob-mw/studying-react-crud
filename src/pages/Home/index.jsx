import React from 'react';
import { Link } from 'react-router-dom';
import { dataRescuedFromLocalStorage as dataRescued } from '../../services';

function Home() {
  const data = dataRescued;

  return(
    <>
     <h1>Home</h1>
      {
      data.map((item, index) => (
          <section key={ index }>
            <img src={ item.imagePath } alt="imovel-figure"/>
            <p>{ item.describe }</p>
           <Link to={`/details/${item.id}`}>Detalhes</Link>
          </section>
        ))
      } 
    </>
  );
}

export default Home;
