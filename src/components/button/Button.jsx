import classes from './Button.module.scss';

import React from 'react';

const Button = ({ children, ...otherProps }) => {
  return (
    <button className={classes.btn} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
