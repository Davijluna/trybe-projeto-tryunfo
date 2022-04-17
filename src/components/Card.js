import { Component } from 'react/cjs/react.production.min';
import PropTypes from 'prop-types';

const React = require('react');

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
      cardTrunfo } = this.props;
    return (
      <div className="cardDiv">
        <div className="divDentro">
          <span data-testid="name-card" className="nameSpan"><h1>{cardName}</h1></span>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <div
            data-testid="description-card"
            className="description"
          >
            {cardDescription}
          </div>
          <span className="spanText">Atributo1:</span>
          <div
            data-testid="attr1-card"
            className="divAtr"
          >
            <span className="spanATR"><p>{cardAttr1}</p></span>
          </div>
          <span className="spanText">Atributo2:</span>
          <div
            data-testid="attr2-card"
            className="divAtr"
          >
            <span className="spanATR">
              <p>
                { cardAttr2 }
              </p>
            </span>
          </div>
          <span className="spanText">Atributo3:</span>
          <div
            data-testid="attr3-card"
            className="divAtr"
          >
            <span className="spanATR">
              <p>
                { cardAttr3 }
              </p>
            </span>
          </div>
          <span data-testid="rare-card">{cardRare}</span>
          {cardTrunfo && <span data-testid="trunfo-card">Super Trunfo</span> }
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};
export default Card;
