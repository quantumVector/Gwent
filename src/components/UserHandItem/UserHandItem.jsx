import React, { useEffect, useState } from 'react';
import classes from './UserHandItem.module.css';
import cn from 'classnames';

const UserHandItem = ({ title, img, id, selectCard, selectedCard, removeSelectedCard }) => {
  const [plug, setPlug] = useState(false);

  const onSelectCard = (e) => {
    if (selectedCard) {
      removeSelectedCard();
      setPlug(false);
      return;
    }

    selectCard(e.target.attributes['card-id'].value);
    setPlug(true);
  }

  useEffect(() => {
    if (!selectedCard) {
      setPlug(false);
    }
  }, [selectedCard]);

  return (
    <div className={classes.item}>
      <img className={cn(classes.img, { [classes.plug]: plug })} src={img} alt={title} card-id={id} onDoubleClick={onSelectCard} />
    </div>
  )
}

export default UserHandItem;