import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
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
    } = this.props;
    return (
      <div>
        <h1 data-testid="name-card">{cardName}</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <h2 data-testid="description-card">{cardDescription}</h2>
        <div data-testid="attr1-card">{cardAttr1}</div>
        <div data-testid="attr2-card">{cardAttr2}</div>
        <div data-testid="attr3-card">{cardAttr3}</div>
        <div data-testid="rare-card">{cardRare}</div>
        {cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
};

export default Card;