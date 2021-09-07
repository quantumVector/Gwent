import React from 'react';
import SliderItem from '../SliderItem/SliderItem';
import classes from './Slider.module.css';

const Slider = ({ increaseNumberReplacedCards, replacedCardsNumber,
  hideSlider, decks, updateUserCards }) => {
  if (replacedCardsNumber === 2) hideSlider();

  const cards = decks.userHand.map(item => {
    return <SliderItem decks={decks}
      increaseNumberReplacedCards={increaseNumberReplacedCards}
      key={item.id}
      title={item.title}
      power={item.power}
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