import React from 'react';
import Saved from './components/Saved';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      save: [],
      inputValue: 'macete',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      valorMax: 210,
    };
  }

  inputChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  isSaveButtonDisabled = () => {
    const noventa = 90;
    const {
      cardDescription,
      cardAttr1, cardAttr2, cardAttr3, inputValue, cardImage, valorMax } = this.state;
    if (!cardImage || !cardDescription || !inputValue) {
      return true;
    }
    if (+cardAttr1 + +cardAttr2 + +cardAttr3 > valorMax) {
      return true;
    }
    if (cardAttr1 > noventa || cardAttr1 < 0
      || cardAttr2 > noventa || cardAttr2 < 0
      || cardAttr3 > noventa || cardAttr3 < 0) {
      return true;
    }
    return false;
  };

  RemoveCard =({ target }) => {
    const { save } = this.state;
    const { id } = target;
    const newSaved = save;
    if (save[id].cardTrunfo) {
      newSaved.splice(+id, 1);
      this.setState({
        save: newSaved,
        hasTrunfo: false,
      });
    }
    newSaved.splice(+id, 1);
    this.setState({
      save: newSaved,
    });
  }

  onSaveButtonClick = () => {
    // hof some
    this.setState((prev) => ({
      save: [...prev.save, prev],
      inputValue: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }), () => {
      const { save } = this.state;
      const booleano = save.some((iten) => iten.cardTrunfo);
      this.setState({
        hasTrunfo: booleano,
      });
    });
  }

  render() {
    const {
      inputValue, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, hasTrunfo, cardTrunfo, save } = this.state;
    // const { save } = this.state;
    return (
      <main>
        <div className="container">
          <Form
            cardName={ inputValue }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ this.isSaveButtonDisabled() }
            onInputChange={ this.inputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <div className="left">
            <Card
              cardName={ inputValue }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
          <div>
            <Saved save={ save } RemoveCard={ this.RemoveCard } />
          </div>
        </div>
        <div />
      </main>
    );
  }
}
export default App;
