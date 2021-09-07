import React from 'react';
import SliderItem from '../SliderItem/SliderItem';
import classes from './Slider.module.css';

const Slider = ({ move, increaseNumberReplacedCards, replacedCardsNumber,
  hideSlider, decks, updateUserCards, showModal }) => {

  if (replacedCardsNumber === 2) {
    hideSlider();
    showModal('Начало раунда');

    let message;

    if (move === 'enemy') message = 'Ход противника';
    if (move === 'user') message = 'Ваш ход';

    setTimeout(() => showModal(message), 2000);
  }

  const cards = decks.userHand.map(item => {
    return <SliderItem decks={decks}
      increaseNumberReplacedCards={increaseNumberReplacedCards}
      key={item.id}
      title={item.title}
      power={item.power}
      type={item.type}
      ability={item.ability}
      img={item.img}
      id={item.id}
      updateUserCards={updateUserCards} />
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