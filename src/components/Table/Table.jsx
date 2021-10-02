import React from 'react';
import TableSide from './TableSide/TableSide';

const Table = (props) => {
  const side = props.side;

  return (
    <>
      {side === 'enemy' &&
        <TableSide className='enemySide' side={side} {...props} />}
      {side === 'user' &&
        <TableSide className='userSide' side={side} {...props} />}
    </>
  )
}

export default Table;