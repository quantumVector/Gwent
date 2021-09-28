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
  console.log(props.meleeFieldUnlocked)
  return (
    <div className={cn(
      classes[`${side}${typeUnits}${typeComponent}`],
      classes[`${typeComponent}Wrap`]
    )}>

      <div className={cn(
        classes[`${typeComponent}Item`],
        {
          [classes.unlocked]: (props.meleeFieldUnlocked && typeUnits === 'Melee' && side === 'user')
            || (props.rangedFieldUnlocked && typeUnits === 'Ranged' && side === 'user')
            || (props.siegeFieldUnlocked && typeUnits === 'Siege' && side === 'user')
        },
      )}></div>
    </div>
  )
}

export default Side;