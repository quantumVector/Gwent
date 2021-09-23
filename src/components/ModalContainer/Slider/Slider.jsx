import React from 'react';
import SliderItem from './SliderItem/SliderItem';
import classes from './Slider.module.css';

const Slider = (props) => {
  const cards = props.decks.userHand.map(item => {
    return <SliderItem
      key={item.id}
      title={item.title}
      power={item.power}
      type={item.type}
      ability={item.ability}
      img={item.img}
      id={item.id}
      replaceСard={props.replaceСard}
      increaseCounter={props.increaseCounter} />
  });

  return (
    <div className={classes.slider}>
      <div className={classes.wrap}>
        {cards}
      </div>
    </div>
  )
}

export default Slider;