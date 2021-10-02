import React from 'react';
import classes from './Card.module.css';
import cn from 'classnames';

const Unit = ({ img, title, power, type, ability }) => {
  const isSpecialCard = (type === 'decoy') || (type === 'modifieMelee');
  const isHero = (ability === 'hero') || (ability === 'medicHero') || (ability === 'spyHero');

  return (
    <div className={classes.item}>
      <img className={classes.img} src={img} alt={title} />
      <div className={cn(classes.power, { [classes.heroPower]: isHero })}>{!isSpecialCard && power}</div>
    </div>
  )
}

export default Unit;