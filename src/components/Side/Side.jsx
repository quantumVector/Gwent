import React from 'react';
import classes from './Side.module.css';
import cn from 'classnames';

const Side = (props) => {
  const side = props.side;

  return (
    <>
      {side === 'enemy' &&
        <SideTemplate className={classes.enemySide} side={side} {...props} />}
      {side === 'user' &&
        <SideTemplate className={classes.userSide} side={side} {...props} />}
    </>
  )
}

const SideTemplate = ({ className, side, ...props }) => {
  return (
    <div className={className}>
      <SideItem side={side} typeUnits='Ranged' typeComponent='Modifier' />
      <SideItem side={side} typeUnits='Melee' typeComponent='Modifier' />
      <SideItem side={side} typeUnits='Siege' typeComponent='Modifier' />
      <SideItem side={side} typeUnits='Melee' typeComponent='Cards' {...props} />
      <SideItem side={side} typeUnits='Ranged' typeComponent='Cards' {...props} />
      <SideItem side={side} typeUnits='Siege' typeComponent='Cards' {...props} />
      <SideItem side={side} typeUnits='Melee' typeComponent='Power' />
      <SideItem side={side} typeUnits='Ranged' typeComponent='Power' />
      <SideItem side={side} typeUnits='Siege' typeComponent='Power' />
    </div>
  )
}

const SideItem = ({ side, typeUnits, typeComponent, ...props }) => {
  const onPlayCard = () => {
    if (unlockedField) props.playCard(props.selectedCard, unlockedField);
  }

  const defineUnlockedField = () => {
    if (props.meleeFieldUnlocked && typeUnits === 'Melee' && side === 'user') return 'melee';
    if (props.rangedFieldUnlocked && typeUnits === 'Ranged' && side === 'user') return 'ranged';
    if (props.siegeFieldUnlocked && typeUnits === 'Siege' && side === 'user') return 'siege';
  }

  const unlockedField = defineUnlockedField();

  let cards;

  const setCards = (cardsArray) => {
    cards = cardsArray.map(item => {
      return <UnitCards key={item.id} img={item.img} title={item.title} />
    })
  }

  if (typeUnits === 'Melee' && side === 'user' && typeComponent === 'Cards') setCards(props.userMeleeCards);
  if (typeUnits === 'Ranged' && side === 'user' && typeComponent === 'Cards') setCards(props.userRangedCards);
  if (typeUnits === 'Siege' && side === 'user' && typeComponent === 'Cards') setCards(props.userSiegeCards);

  return (
    <div className={cn(
      classes[`${side}${typeUnits}${typeComponent}`],
      classes[`${typeComponent}Wrap`]
    )}>
      <div className={cn(classes[`${typeComponent}Item`], { [classes.unlocked]: unlockedField })}
        onDoubleClick={onPlayCard}>{cards}</div>
    </div>
  )
}

const UnitCards = ({ img, title }) => {
  return (
    <img className={classes.img}
      src={img}
      alt={title} />
  )
}

export default Side;