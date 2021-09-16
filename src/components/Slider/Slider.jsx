import React from 'react';
import SliderItem from '../SliderItem/SliderItem';
import classes from './Slider.module.css';

const Slider = ({ move, counter, hideSlider, decks,
  replaceСard, showModal, increaseCounter }) => {

  if (counter === 2) {
    hideSlider();
    showModal('Начало раунда');

    let message;

    if (move === 'enemy') message = 'Ход противника';
    if (move === 'user') message = 'Ваш ход';

    setTimeout(() => showModal(message), 2000);
  }

  const cards = decks.userHand.map(item => {
    return <SliderItem
      key={item.id}
      title={item.title}
      power={item.power}
      type={item.type}
      ability={item.ability}
      img={item.img}
      id={item.id}
      replaceСard={replaceСard}
      increaseCounter={increaseCounter} />
  });

  return (
    <div className={classes.wrap}>
      <div className={classes.slider}>
        {cards}
      </div>
    </div>
  )
}

export default Slider;