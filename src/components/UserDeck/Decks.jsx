import React from 'react';
import { useSelector } from 'react-redux';
import classes from './Decks.module.css';

const Decks = ({ side }) => {
  const userDeckFace = useSelector(({ decks }) => decks.userDeckFace);
  const userDeckNumber = useSelector(({ decks }) => decks.userDeckNumber);
  const enemyDeckFace = useSelector(({ decks }) => decks.enemyDeckFace);
  const enemyDeckNumber = useSelector(({ decks }) => decks.enemyDeckNumber);

  return (
    <>
      {side === 'enemy' &&
        <Deck deckFace={enemyDeckFace}
          deckNumber={enemyDeckNumber}
          className={classes.enemyDeck} />}
      {side === 'user' &&
        <Deck deckFace={userDeckFace}
          deckNumber={userDeckNumber}
          className={classes.userDeck} />}
    </>
  )
}

const Deck = ({ deckFace, deckNumber, className }) => {
  return (
    <div className={className}>
      <img src={deckFace} className={classes.face} alt="face" />
      <div className={classes.number}>{deckNumber}</div>
    </div>
  )
}

export default Decks;