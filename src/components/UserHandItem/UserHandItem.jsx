import React, { useEffect, useRef, useState } from 'react';
import classes from './UserHandItem.module.css';
import cn from 'classnames';

const UserHandItem = ({ title, img, id, selectCard, selectedCard, removeSelectedCard }) => {
  const [plug, setPlug] = useState(false);
  const card = useRef(null);

  const onSelectCard = (e) => {
    if (selectedCard) removeSelectedCard();

    selectCard(e.target.attributes['card-id'].value);
    setPlug(true);
  }

  useEffect(() => {
    if (!selectedCard) setPlug(false);
    if (selectedCard) {
      if (card.current.attributes['card-id'].value !== selectedCard.id) setPlug(false);
    }
  }, [selectedCard]);

  return (
    <div className={classes.item}>
      <img ref={card}
        className={cn(classes.img, { [classes.plug]: plug })}
        src={img}
        alt={title}
        card-id={id}
        onDoubleClick={onSelectCard} />
    </div>
  )
}

export default UserHandItem;