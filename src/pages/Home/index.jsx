import { useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../../context';

export default function Home() {

  const { localData } = useContext(context);

  return(
    <>
     <h1>Home</h1>
      {
      localData.map((item, index) => (
          <section key={ index }>
            <img src={ item.imagePath } alt="imovel-figure" width="300"/>
            <p>{ item.describe }</p>
           <Link to={`/details/${item.id}`}>Detalhes</Link>
          </section>
        ))
      } 
    </>
  );
}
