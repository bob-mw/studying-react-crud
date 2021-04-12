import React from 'react';

function Home() {
  return(
    <>
    <h1>Home</h1>
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
    </form>
    </>
  );
}

export default Home;
