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




/* const onSelectCard = e => {
    const getRandomCardFromDeck = () => {
      const randomInt = Math.floor(Math.random() * decks.userDeck.length);
      return decks.userDeck[randomInt];
    }

    const randomCardFromDeck = getRandomCardFromDeck();

    const modifier = (mutableObj, replaceableСardId, newCard) => mutableObj.filter((card) => {
      if (card.id === replaceableСardId) {
        card.title = newCard.title;
        card.power = newCard.power;
        card.type = newCard.type;
        card.ability = newCard.ability;
        card.img = newCard.img;
        card.id = newCard.id;
      }

      return true;
    })

    const modifiedUserHand = modifier(decks.userHand, e.target.id, randomCardFromDeck);
    const modifiedUserDeck = modifier(decks.userDeck, randomCardFromDeck.id, e.target);

    updateUserCards(modifiedUserHand, modifiedUserDeck);
    increaseNumberReplacedCards();
  } */