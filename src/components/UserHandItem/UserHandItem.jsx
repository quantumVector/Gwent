import React from 'react';
import classes from './UserHandItem.module.css';

const UserHandItem = ({ power }) => {
  return (
    <div className={classes.item}>{power}</div>
  )
}

export default UserHandItem;