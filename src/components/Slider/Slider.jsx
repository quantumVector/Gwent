import React, { useEffect, useState } from 'react';
import SliderItem from '../SliderItem/SliderItem';
import classes from './Slider.module.css';
import cn from "classnames";

const Slider = ({ move, active, counter, setModal, decks, replaceСard, increaseCounter }) => {
  const [sliderActive, setSliderActive] = useState(false);
  let message;

  if (move === 'enemy') message = 'Ход противника';
  if (move === 'user') message = 'Ваш ход';

  useEffect(() => {
    if (active) setSliderActive(true);
    if (counter === 2) {
      setSliderActive(false);
      setModal('Начало раунда');
      setTimeout(() => { setModal(message) }, 3100);
    }

  }, [active, counter, setModal, move, message]);

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
    <div className={cn(classes.slider, { [classes.active]: sliderActive })}>
      <div className={classes.wrap}>
        {cards}
      </div>
    </div>
  )
}

export default Slider;