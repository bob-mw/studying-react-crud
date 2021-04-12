import React from 'react';

function Register() {
  return(
    <form>
    <fieldset>
      <label htmlFor="pictureInput">
          Imagem
        <input type="text" id="pictureInput" placeholder="link da imagem"/>
      </label>
      <label htmlFor="describe">
          Descrição
        <textarea name="describe" id="describe" cols="30" rows="10"></textarea>
      </label>
    </fieldset>
    <button type="button">Registrar</button>
   </form>
  );
}

export default Register;
