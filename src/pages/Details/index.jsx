import React from 'react';
import { Link } from 'react-router-dom';
import { dataRescuedFromLocalStorage as dataRescued } from '../../services';

function Details(props) {
   const data = dataRescued;
    const { id } = props.match.params;

    const renderSingleInformations = (data, id) => {
      const singleInformation = data.find((item) => item.id === Number(id));
      const { imagePath, describe, localization } = singleInformation;
      return(
          <section>
            <img src={ imagePath } alt="house"/>
            {
              localization.map((local) => (
                <table style={{"display": "flex"}}>
                <thead>
                  <tr>
                    <th>Estado</th>
                    <th>Cidade</th>
                  </tr>
                  <tbody>
                    <tr>
                      <td>{ local.state }</td>
                      <td>{ local.city }</td>
                    </tr>
                  </tbody>
                </thead>
              </table>
              ))
            }
            <p>{ describe }</p>
            <Link to={`/register/${id}`}>Editar</Link>
          </section>
      );
    }

    return(
      renderSingleInformations(data, id )
    );

}

export default Details;
