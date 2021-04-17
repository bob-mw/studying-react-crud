import React, { useContext } from 'react';
import context from '../../context/context'

function Register(props) {
  const { data, setData } = useContext(context);
  const { id } = props.match.params;

  const dataEditable = data.find((item) => item.id === Number(id))

  return(
    <form>
    <fieldset>
      <label htmlFor="pictureInput">
          Imagem
        <input type="text" id="pictureInput" name="imagePath" />
      </label>
      <label htmlFor="describe">
          Descrição
        <textarea name="describe" id="describe" cols="30" rows="10">
        { dataEditable.describe } 
        </textarea>
      </label>
    </fieldset>
    <button type="button">Registrar</button>
    <button type="button">Deletar</button>
   </form>
  );
}

export default Register;
