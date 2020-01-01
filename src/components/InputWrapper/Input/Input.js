import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
  return (
    <input
      type='text'
      className={classes['Input']}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.changed}
      onKeyPress={props.onKeyPress}
    />
  );
};

export default Input;
