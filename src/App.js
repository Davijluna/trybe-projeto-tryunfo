import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      onSaveButtonClick: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox' ? target.checked : target.value);
    this.setState(
      () => ({ [name]: value }),
    );
    this.setState({ [name]: value }, () => this.checagem());
  }

  onSaveButtonClick() {
    console.log('oi');
  }

  checagem() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
    } = this.state;

    const totalDecardes = 210;
    const maxPraCada = 90;
    if (cardName.length > 0
     && cardDescription.length > 0
     && cardImage.length > 0
     && cardRare.length > 0
     && Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= totalDecardes
     && Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxPraCada
     && Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxPraCada
     && Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxPraCada
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo </h1>
        <Form
          cardName={ cardName }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
