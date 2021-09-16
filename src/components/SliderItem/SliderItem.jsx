import React from 'react';
import classes from './SliderItem.module.css';

const SliderItem = (props) => {

  const onSelectCard = e => {
    props.replaceСard(e.target.attributes['card-id'].value);
    props.increaseCounter();
  }

  return (
    <img className={classes.item}
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