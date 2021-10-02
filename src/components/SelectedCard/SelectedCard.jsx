import React from 'react';
import classes from './SelectedCard.module.css';
import cn from 'classnames';

const SelectedCard = ({ selectedCard, removeCard }) => {
  const onRemoveSelectedCard = () => {
    removeCard();
  }

  let isSpecialCard;
  let isHero;

  if (selectedCard) {
    isSpecialCard = (selectedCard.type === 'decoy') || (selectedCard.type === 'modifieMelee');
    isHero = (selectedCard.ability === 'hero') || (selectedCard.ability === 'medicHero') || (selectedCard.ability === 'spyHero');
  }

  return <div className={classes.selectedCard}>
    {selectedCard && <div>
      <img className={classes.img}
        src={selectedCard.img}
        alt={selectedCard.title}
        onDoubleClick={onRemoveSelectedCard} />
      <div className={cn(classes.power, { [classes.heroPower]: isHero })}>{!isSpecialCard && selectedCard.power}</div>
    </div>}
  </div>
}

export default SelectedCard;