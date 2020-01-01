import React from 'react';
import Input from './Input/Input';
import Button from '../Button/Button';

import classes from './InputWrapper.module.css';

const InputWrapper = (props) => {
  return (
    <div className={classes['InputWrapper']}>
      <Button className={classes['ButtonClass']} clicked={props.onReset}>
        <i className="far fa-trash-alt"></i>
      </Button>
      <Input
        placeholder={props.placeholder}
        value={props.value}
        changed={(event) => props.onChange(event)}
        onKeyPress={(event) => props.onKeyPress(event)}
      />
      <Button className={classes['ButtonClass']} clicked={props.addEntry}>
        <i className="far fa-plus-square"></i>
      </Button>
    </div>
  );
};

export default InputWrapper;
