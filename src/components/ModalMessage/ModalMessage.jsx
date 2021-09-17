import React, { useState, useEffect } from 'react';
import classes from './ModalMessage.module.css';
import cn from "classnames";

const ModalMessage = ({ active, message, hideModal }) => {
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (active) setModalActive(true);

    setTimeout(() => {
      setModalActive(false);
      hideModal();
    }, 3000);
  }, [active, hideModal]);

  return (
    <div className={cn(classes.modal, { [classes.active]: modalActive })}>
      <div className={classes.text}>{message}</div>
    </div>
  )
}

export default ModalMessage;