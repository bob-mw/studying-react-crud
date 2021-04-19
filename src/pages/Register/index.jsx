import React, { useContext } from 'react';
import { dataRescuedFromLocalStorage as dataRescued } from '../../services';
import context from '../../context'

function Register(props) {
  const { dataEditable, setDataEditable } = useContext(context);
  const data = dataRescued;
  const { id } = props.match.params;

  const singleData = data.find((item) => item.id === Number(id));

  const handleChange = ({ target: { name, value } }) => { 
      setDataEditable({ ...dataEditable, [name]: value })
  }

  return(
    <form>
    <fieldset>
      <label htmlFor="pictureInput">
          Imagem
        <input type="text" id="pictureInput" name="imagePath" onChange={ handleChange } />
      </label>
      <label htmlFor="describe">
          Descrição
        <textarea name="describe" id="describe" cols="30" rows="10"
        onChange={ handleChange }>
        { singleData.describe } 
        </textarea>
      </label>
    </fieldset>
    <button type="button">Registrar</button>
    <button type="button">Deletar</button>
   </form>
  );
}

export default Register;
