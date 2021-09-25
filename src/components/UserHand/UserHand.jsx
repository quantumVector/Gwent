import React, { useEffect, useState } from 'react';
import UserHandItem from '../UserHandItem/UserHandItem';
import classes from './UserHand.module.css';

const UserHand = ({ userHand, selectCard, selectedCard, removeSelectedCard }) => {
const cards = userHand.map(item => {
    return <UserHandItem
      key={item.id}
      title={item.title}
      img={item.img}
      id={item.id}
      selectCard={selectCard}
      selectedCard={selectedCard}
      removeSelectedCard={removeSelectedCard} />
  })

  return (
    <div className={classes.userHand}>
      {cards}
    </div>
  )
}

export default UserHand;