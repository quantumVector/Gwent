import React from 'react';
import classes from './SliderItem.module.css';
import cn from 'classnames';

const SliderItem = (props) => {

  const onSelectCard = e => {
    props.replaceСard(e.target.attributes['card-id'].value);
    props.increaseCounter();
  }

  const isSpecialCard = (props.type === 'decoy') || (props.type === 'modifieMelee');
  const isHero = (props.ability === 'hero') || (props.ability === 'medicHero') || (props.ability === 'spyHero');

  return (
    <div className={classes.item}>
      <img className={classes.img}
        onDoubleClick={onSelectCard}
        title={props.title}
        power={props.power}
        type={props.type}
        ability={props.ability}
        img={props.img}
        card-id={props.id}
        src={props.img}
        alt={props.title}
      />
      <div className={cn(classes.power, { [classes.heroPower]: isHero })}>{!isSpecialCard && props.power}</div>
    </div>
  )
}

export default SliderItem;