import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserHandItem from '../UserHandItem/UserHandItem';
import classes from './UserHand.module.css';

import { selectCard } from '../../redux/decksReducer';

const UserHand = () => {
  const dispatch = useDispatch();
  const userHand = useSelector(({ decks }) => decks.userHand);
  const selectedCard = useSelector(({ gameProcess }) => gameProcess.selectedCard);

  const cards = userHand.map(item => {
    return <UserHandItem
      key={item.id}
      title={item.title}
      img={item.img}
      id={item.id}
      power={item.power}
      type={item.type}
      ability={item.ability}
      selectCard={card => dispatch(selectCard(card))}
      selectedCard={selectedCard} />
  })

  return (
    <div className={classes.userHand}>
      {cards}
    </div>
  )
}

export default UserHand;