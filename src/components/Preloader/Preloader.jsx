import React from 'react';
import classes from './Preloader.module.css';

const Preloader = () => {
  return <div>
    <div className={ classes.roller }><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  </div>
}

export default Preloader;