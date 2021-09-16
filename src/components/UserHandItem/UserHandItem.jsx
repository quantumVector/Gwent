import React from 'react';
import classes from './UserHandItem.module.css';

const UserHandItem = ({ title, img, id }) => {
  return (
    <div className={classes.item}>
      <img className={classes.img} src={img} alt={title} card-id={id} />
    </div>
  )
}

export default UserHandItem;