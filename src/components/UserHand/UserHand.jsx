import React from 'react';
import UserHandItem from '../UserHandItem/UserHandItem';
import classes from './UserHand.module.css';

const UserHand = ({ userHand }) => {
  const cards = userHand.map(item => {
    return <UserHandItem power={item.title} id={item.id} key={item.id} />
  });

  return (
    <div className={classes.userHand}>
      {cards}
    </div>
  )
}

export default UserHand;