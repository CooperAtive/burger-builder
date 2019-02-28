import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = React.memo((props) => {
  return (
    <Aux>
      <Backdrop show={props.show} clicked={props.modalClosed}/>
      <div 
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        {props.children}
      </div>
    </Aux>
  );
}, (prevProps, newProps) => newProps.show === prevProps.show);

export default modal;
