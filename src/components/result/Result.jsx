import classes from './Result.module.scss';
import { ReactComponent as ThankYouIcon } from '../../assets/illustration-thank-you.svg';
import React from 'react';

const Result = ({ rating }) => {
  return (
    <div className={classes.results}>
      <ThankYouIcon></ThankYouIcon>
      <h3>You selected {rating} out of 5</h3>
      <div className={classes['results-info']}>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default Result;
