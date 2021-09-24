import React from 'react';
import classes from './SelectedCard.module.css';

const SelectedCard = ({ selectedCard }) => {

  return <div className={classes.selectedCard}>
    {selectedCard && <img src={selectedCard.img} alt={selectedCard.title} />}
  </div>
}

export default SelectedCard;