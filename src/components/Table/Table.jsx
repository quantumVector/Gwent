import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUserHandCard } from '../../redux/decksReducer';
import { playCard } from '../../redux/gameProcessReducer';
import TableSide from './TableSide/TableSide';

const Table = ({ side }) => {
  const dispatch = useDispatch();
  const userMeleePower = useSelector(({ gameProcess }) => gameProcess.userMeleePower);
  const userRangedPower = useSelector(({ gameProcess }) => gameProcess.userRangedPower);
  const userSiegePower = useSelector(({ gameProcess }) => gameProcess.userSiegePower);
  const userMeleeCards = useSelector(({ gameProcess }) => gameProcess.userMeleeCards);
  const userRangedCards = useSelector(({ gameProcess }) => gameProcess.userRangedCards);
  const userSiegeCards = useSelector(({ gameProcess }) => gameProcess.userSiegeCards);
  const meleeFieldUnlocked = useSelector(({ gameProcess }) => gameProcess.meleeFieldUnlocked);
  const rangedFieldUnlocked = useSelector(({ gameProcess }) => gameProcess.rangedFieldUnlocked);
  const siegeFieldUnlocked = useSelector(({ gameProcess }) => gameProcess.siegeFieldUnlocked);
  const selectedCard = useSelector(({ gameProcess }) => gameProcess.selectedCard);

  return (
    <>
      {side === 'user' &&
        <TableSide className='userSide'
          side={side}
          userMeleePower={userMeleePower}
          userRangedPower={userRangedPower}
          userSiegePower={userSiegePower}
          userMeleeCards={userMeleeCards}
          userRangedCards={userRangedCards}
          userSiegeCards={userSiegeCards}
          meleeFieldUnlocked={meleeFieldUnlocked}
          rangedFieldUnlocked={rangedFieldUnlocked}
          siegeFieldUnlocked={siegeFieldUnlocked}
          selectedCard={selectedCard}
          playCard={(card, field) => dispatch(playCard(card, field))}
          deleteUserHandCard={(cardId) => dispatch(deleteUserHandCard(cardId))} />}
      {side === 'enemy' &&
        <TableSide className='enemySide'
          side={side}
        />}
    </>
  )
}

export default Table;