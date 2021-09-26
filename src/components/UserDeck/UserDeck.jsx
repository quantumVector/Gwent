import React from 'react';
import classes from './UserDeck.module.css';

const UserDeck = ({ userDeckFace, userDeckNumber }) => {
  return (
    <div className={classes.userDeck}>
      <img src={userDeckFace} className={classes.face} alt="face" />
      <div className={classes.number}>{userDeckNumber}</div>
    </div>
  )
}

export default UserDeck;