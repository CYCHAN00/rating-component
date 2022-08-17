import classes from './Form.module.scss';
import Button from '../button/Button';
import React from 'react';
import { ReactComponent as StarIcon } from '../../assets/icon-star.svg';

const Form = ({ showResult }) => {
  let rating = 0;
  const onchangeHandler = (event) => {
    rating = event.target.value;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    showResult(rating);
  };
  return (
    <div className={classes.container}>
      <div className={classes['icon-background']}>
        <StarIcon className={classes.icon}></StarIcon>
      </div>

      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={submitHandler}>
        <div className={classes.radio}>
          <div className={classes['radio-container']}>
            <input
              type='radio'
              name='rate'
              id='s1'
              value='1'
              onChange={onchangeHandler}
              className={classes['radio-input']}
            />
            <label htmlFor='s1' className={classes['radio-label']}>
              <span className={classes.checkmark}>1</span>
            </label>
          </div>
          <div className={classes['radio-container']}>
            <input
              type='radio'
              name='rate'
              id='s2'
              value='2'
              onChange={onchangeHandler}
              className={classes['radio-input']}
            />
            <label htmlFor='s2' className={classes['radio-label']}>
              <span className={classes.checkmark}>2</span>
            </label>
          </div>
          <div className={classes['radio-container']}>
            <input
              type='radio'
              name='rate'
              id='s3'
              value='3'
              onChange={onchangeHandler}
              className={classes['radio-input']}
            />
            <label htmlFor='s3' className={classes['radio-label']}>
              <span className={classes.checkmark}>3</span>
            </label>
          </div>
          <div className={classes['radio-container']}>
            <input
              type='radio'
              name='rate'
              id='s4'
              value='4'
              onChange={onchangeHandler}
              className={classes['radio-input']}
            />
            <label htmlFor='s4' className={classes['radio-label']}>
              <span className={classes.checkmark}>4</span>
            </label>
          </div>
          <div className={classes['radio-container']}>
            <input
              type='radio'
              name='rate'
              id='s5'
              value='5'
              onChange={onchangeHandler}
              className={classes['radio-input']}
            />
            <label htmlFor='s5' className={classes['radio-label']}>
              <span className={classes.checkmark}>5</span>
            </label>
          </div>
        </div>
        <Button type='submit'>submit</Button>
      </form>
    </div>
  );
};

export default Form;
