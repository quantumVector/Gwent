import React from 'react';
import Field from '../Field/Field';
import classes from './TableSide.module.css';

const TableSide = ({ className, side, ...props }) => {
  return (
    <div className={classes[className]}>
      <Field side={side} typeUnits='Ranged' typeComponent='Modifier' />
      <Field side={side} typeUnits='Melee' typeComponent='Modifier' />
      <Field side={side} typeUnits='Siege' typeComponent='Modifier' />
      <Field side={side} typeUnits='Melee' typeComponent='Cards' {...props} />
      <Field side={side} typeUnits='Ranged' typeComponent='Cards' {...props} />
      <Field side={side} typeUnits='Siege' typeComponent='Cards' {...props} />
      <Field side={side} typeUnits='Melee' typeComponent='Power' />
      <Field side={side} typeUnits='Ranged' typeComponent='Power' />
      <Field side={side} typeUnits='Siege' typeComponent='Power' />
    </div>
  )
}

export default TableSide;