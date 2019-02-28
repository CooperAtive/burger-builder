import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = (props) => {
  return (
    // Can pass down custom height via props, but 
    // there are other methods to solve the dynamic styling problem
    <div className={classes.Logo} style={{height: props.height}}>
      <img src={burgerLogo} alt='logo' />
    </div>
  );
};

export default logo;
