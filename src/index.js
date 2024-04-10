import React from "react";
import ReactDOM from "react-dom";
import '../src/'

const App = () => {
  return (
    <div class="container">
      <label
        className='rotulo'
        htmlFor="Pergunta"
      >Qual é a sua pergunta?
      </label>

      <input class="textfield" type="text" id="pergunta"></input>

      <button className="botao">Enviar</button>

      <label
        className="rotulo"
        htmlFor="Resposta"
      >Resposta:
      </label>

      <input
        className="textfield"
        readOnly
        type="text"
        id="resposta"       
      ></input>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
