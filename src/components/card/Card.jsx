import classes from './Card.module.scss';
import React, { useState } from 'react';
import Result from '../result/Result';
import Form from '../form/Form';

const Card = () => {
  const [rating, setRating] = useState(0);

  const showResultHandler = (num) => {
    setRating(num);
  };

  return (
    <div className={classes.container}>
      {rating === 0 ? (
        <Form showResult={showResultHandler}></Form>
      ) : (
        <Result rating={rating}></Result>
      )}
    </div>
  );
};

export default Card;
