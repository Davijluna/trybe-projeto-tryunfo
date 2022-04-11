import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="nome">
            Nome da Carta:
            <input data-testid="name-input" name="nome" type="text" />
          </label>

          <label htmlFor="descriçãoDeCarta">
            Descrição das cartas:
            <textarea data-testid="description-input" nome="descriçãoDeCartas" />
          </label>
          <label htmlFor="numero">
            Numero de cartas:
            <input data-testid="attr1-input" type="number" name="numero" />
          </label>
          <label htmlFor="numero2">
            Atributo 2:
            <input data-testid="attr2-input" type="number2" name="numero2" />
          </label>
          <label htmlFor="numero3">
            Atributo 3:
            <input data-testid="attr3-input" type="number2" name="numero3" />
          </label>
          <label htmlFor="imagen">
            Imagens :
            <input data-testid="image-input" type="text" name="imagen" />
          </label>
          <label htmlFor="cartaRaras">
            options:
            <select data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="supertrunfo">
            Super trunfo:
            <textarea data-testid="trunfo-input" />
          </label>
          <button data-testid="save-button" type="button">Salvar</button>
        </form>
      </div>);
  }
}

export default Form;
