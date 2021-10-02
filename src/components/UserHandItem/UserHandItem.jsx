import React, { useEffect, useRef, useState } from 'react';
import classes from './UserHandItem.module.css';
import cn from 'classnames';

const UserHandItem = ({ title, img, id, power, type, ability, selectCard, selectedCard, removeCard }) => {
  const [plug, setPlug] = useState(false);
  const card = useRef(null);

  const onSelectCard = (e) => {
    if (selectedCard) removeCard();

    selectCard(e.target.attributes['card-id'].value);
    setPlug(true);
  }

  useEffect(() => {
    if (!selectedCard) {
      setPlug(false);
    } else if (card.current.attributes['card-id'].value !== selectedCard.id) {
      setPlug(false);
    }
  }, [selectedCard]);

  const isSpecialCard = (type === 'decoy') || (type === 'modifieMelee');
  const isHero = (ability === 'hero') || (ability === 'medicHero') || (ability === 'spyHero');

  return (
    <div className={classes.item}>
      <img ref={card}
        className={cn(classes.img, { [classes.plug]: plug })}
        src={img}
        alt={title}
        card-id={id}
        onDoubleClick={onSelectCard} />
      <div className={cn(classes.power, { [classes.heroPower]: isHero })}>{(!isSpecialCard && !plug) && power}</div>
    </div>
  )
}

export default UserHandItem;