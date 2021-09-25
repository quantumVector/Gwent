import React from 'react';
import classes from './SelectedCard.module.css';

const SelectedCard = ({ selectedCard, removeSelectedCard }) => {
  const onRemoveSelectedCard = () => {
    removeSelectedCard();
  }

  return <div className={classes.selectedCard}>
    {selectedCard && <img src={selectedCard.img} alt={selectedCard.title} onDoubleClick={onRemoveSelectedCard} />}
  </div>
}

export default SelectedCard;