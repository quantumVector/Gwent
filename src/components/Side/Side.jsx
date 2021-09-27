import React from 'react';
import classes from './Side.module.css';

const Side = (props) => {
  const side = props.side;

  return (
    <>
      {side === 'enemy' &&
        <SideTemplate className={classes.enemySide} side={side} />}
      {side === 'user' &&
        <SideTemplate className={classes.userSide} side={side} />}
    </>
  )
}

const SideTemplate = ({ className, side }) => {
  return (
    <div className={className}>
      <SideItem side={side} typeUnits='Ranged' typeComponent='Modifier' />
      <SideItem side={side} typeUnits='Melee' typeComponent='Modifier' />
      <SideItem side={side} typeUnits='Siege' typeComponent='Modifier' />
      <SideItem side={side} typeUnits='Melee' typeComponent='Cards' />
      <SideItem side={side} typeUnits='Ranged' typeComponent='Cards' />
      <SideItem side={side} typeUnits='Siege' typeComponent='Cards' />
      <SideItem side={side} typeUnits='Melee' typeComponent='Power' />
      <SideItem side={side} typeUnits='Ranged' typeComponent='Power' />
      <SideItem side={side} typeUnits='Siege' typeComponent='Power' />
    </div>
  )
}

const SideItem = ({ side, typeUnits, typeComponent }) => {
  return (
    <div className={classes[`${side}${typeUnits}${typeComponent}`]}>

    </div>
  )
}

export default Side;