import { useContext, useState } from 'react';
import context from '../../context';

export default function Register(props) {
  const { localData, setLocalData } = useContext(context);

  const { id } = props.match.params;

  const singleData = localData.find((item) => item.id === Number(id));
  
  const [dataEditable, setDataEditable] = useState({...singleData});

  const handleChange = ({ target: { name, value }}) => {
    setDataEditable({...dataEditable, [name]: value})
  }

  const handleRegister = async () => {
    const localDiffData = localData.filter((item) => item.id !== Number(dataEditable.id));
    setLocalData([...localDiffData, dataEditable]);
    localStorage.setItem('dataCards', JSON.stringify([...localDiffData, dataEditable]));
  }

  return(
    <form>
    <fieldset>
      <label htmlFor="pictureInput">
          Imagem
        <input
          type="text"
          id="pictureInput"
          name="imagePath"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="describe">
          Descrição
        <textarea
          name="describe"
          id="describe"
          cols="30"
          rows="10"
          onChange={ handleChange }
      >
        { singleData.describe }
        </textarea>
      </label>
    </fieldset>
    <button type="button" onClick={ handleRegister }>Registrar</button>
    <button type="button">Deletar</button>
   </form>
  );
}
