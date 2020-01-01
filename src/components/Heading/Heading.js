import React from 'react';
import classes from './Heading.module.css';

const Heading = (props) => {
  return (
    <div className={classes['Heading']}>
      {props.children}
    </div>
  );
};

export default Heading;
