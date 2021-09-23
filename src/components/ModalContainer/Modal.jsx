import React, { useEffect } from 'react';
import ModalMessage from './ModalMessage/ModalMessage';
import Slider from './Slider/Slider';

const Modal = (props) => {
  let message;

  if (props.move === 'enemy') message = 'Ход противника';
  if (props.move === 'user') message = 'Ваш ход';

  useEffect(() => {
    if (props.counter === 2) {
      props.setModals(['Начало раунда', message]);
      props.resetCounter();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.counter]);

  return (
    <>
      {props.activeModalMessage && <ModalMessage message={props.message} />}
      {props.activeSlider && <Slider {...props} />}
    </>
  )
}

export default Modal;