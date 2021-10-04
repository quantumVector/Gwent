import React from 'react';
import classes from './TotalPower.module.css';

const TotalPower = ({ userTotalPower }) => {
  return (
    <div className={classes.totalPowerWrap}>
      <div className={classes.totalPower}>{userTotalPower}</div>
    </div>
  )
}

export default TotalPower;