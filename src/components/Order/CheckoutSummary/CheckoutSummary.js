import React from 'react'

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h3>esperamos que su hamburguesa sea sabrosa</h3>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button 
        btnType="Danger"
        clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button 
        btnType="Success"
        clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
  );
};

export default checkoutSummary;
