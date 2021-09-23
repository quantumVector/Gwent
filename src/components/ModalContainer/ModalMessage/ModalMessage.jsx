import React from 'react';
import classes from './ModalMessage.module.css';

const ModalMessage = ({ message }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.text}>{message}</div>
    </div>
  )
}

export default ModalMessage;