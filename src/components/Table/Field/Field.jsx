import React from 'react';
import classes from './Field.module.css';
import cn from 'classnames';
import Card from '../Card/Card';

const Field = ({ side, typeUnits, typeComponent, ...props }) => {
  const onPlayCard = () => {
    if (unlockedField) {
      props.playCard(props.selectedCard, unlockedField);
      props.deleteUserHandCard(props.selectedCard.id);
    }
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
      return <Card
        key={item.id}
        img={item.img}
        title={item.title}
        power={item.power}
        type={item.type}
        ability={item.ability} />
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

export default Field;