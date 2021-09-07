import React from 'react';
import classes from './UserHandItem.module.css';

const UserHandItem = ({ title, img }) => {
  return (
    <div className={classes.item}>
      <img className={classes.img} src={img} alt={title} />
    </div>
  )
}

export default UserHandItem;