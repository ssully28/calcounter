import React from 'react';
import classes from './Entry.module.css';

const Entry = (props) => {
  return (
    <div className={classes['Entry']}>{props.children}</div>
  );
};

export default Entry;
