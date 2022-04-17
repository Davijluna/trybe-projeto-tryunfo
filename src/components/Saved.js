import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class Saved extends React.Component {
  render() {
    const { save, RemoveCard } = this.props;
    return ((save.map((iten, index) => (
      <div key={ index }>
        <Card
          cardName={ iten.inputValue }
          cardDescription={ iten.cardDescription }
          cardAttr1={ iten.cardAttr1 }
          cardAttr2={ iten.cardAttr2 }
          cardAttr3={ iten.cardAttr3 }
          cardImage={ iten.cardImage }
          cardRare={ iten.cardRare }
          cardTrunfo={ iten.cardTrunfo }
          key={ iten.inputValue }
        />
        <button
          type="button"
          className="btn"
          id={ index }
          onClick={ RemoveCard }
          data-testid="delete-button"
        >
          Excluir
        </button>
      </div>
    ))));
  }
}
Saved.propTypes = {
  save: PropTypes.arrayOf(Object).isRequired,
  RemoveCard: PropTypes.func.isRequired,
};
