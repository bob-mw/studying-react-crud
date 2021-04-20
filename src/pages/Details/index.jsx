import { useContext } from 'react';
import { Link } from 'react-router-dom';
import context from '../../context';

export default function Details(props) {
    const { localData } = useContext(context)
    const { id } = props.match.params;

    const renderSingleInformations = (data, id) => {
      const singleInformation = data.find((item) => item.id === Number(id));
      const { imagePath, describe, localization } = singleInformation;
      return(
          <section>
            <img src={ imagePath } alt="house" width="300" />
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
      renderSingleInformations(localData, id )
    );

}
