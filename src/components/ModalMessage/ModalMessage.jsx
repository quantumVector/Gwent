import React from 'react';
import classes from './ModalMessage.module.css';

const ModalMessage = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.text}>{props.msg}</div>
    </div>
  )
}

export default ModalMessage;