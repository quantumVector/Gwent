import React, { useEffect } from 'react';
import classes from './SliderItem.module.css';

const SliderItem = ({ increaseNumberReplacedCards, decks, title,
  power, type, ability, img, id, updateUserCards }) => {

  const onSelectCard = e => {
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
  }

  return (
    <img className={classes.item}
      onDoubleClick={onSelectCard}
      title={title}
      power={power}
      type={type}
      ability={ability}
      img={img}
      id={id}
      src={img}
      alt={title}
    />
  )
}

export default SliderItem;