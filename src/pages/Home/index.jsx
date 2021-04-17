import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../../context/context';

function Home() {
  const { data } = useContext(context);

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
