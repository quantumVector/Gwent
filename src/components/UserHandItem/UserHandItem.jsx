import React from 'react';
import classes from './UserHandItem.module.css';

const UserHandItem = ({ title, img, id, selectCard }) => {
  const onSelectCard = (e) => {
    selectCard(e.target.attributes['card-id'].value);
  }

  return (
    <div className={classes.item}>
      <img className={classes.img} src={img} alt={title} card-id={id} onDoubleClick={onSelectCard} />
    </div>
  )
}

export default UserHandItem;