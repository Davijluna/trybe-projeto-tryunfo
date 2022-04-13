import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     cardName: '',
  //     cardDescription: '',
  //     cardAttr1: '',
  //     cardAttr2: '',
  //     cardAttr3: '',
  //     cardImage: '',
  //     cardRare: '',
  //     cardTrunfo: false,
  //     isSaveButtonDisabled: false,
  //   };
  // this.onInputChange = this.onInputChange(this);
  // this.onSaveButtonClick = this.onSaveButtonClick(this);
  // }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick() {
    console.log('oi');
  }

  render() {
    // const {
    //   cardName,
    //   cardDescription,
    //   cardAttr1,
    //   cardAttr2,
    //   cardAttr3,
    //   cardImage,
    //   cardRare,
    //   cardTrunfo,
    //   isSaveButtonDisabled,
    // } = this.state;
    return (
      <div>
        <h1>Tryunfo </h1>
        <Form />
      </div>
    );
  }
}

export default App;
