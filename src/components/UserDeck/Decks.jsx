import React from 'react';
import classes from './Decks.module.css';

const Decks = (props) => {
  const side = props.side;

  return (
    <>
      {side === 'enemy' &&
        <Deck deckFace={props.enemyDeckFace}
          deckNumber={props.enemyDeckNumber}
          className={classes.enemyDeck} />}
      {side === 'user' &&
        <Deck deckFace={props.userDeckFace}
          deckNumber={props.userDeckNumber}
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