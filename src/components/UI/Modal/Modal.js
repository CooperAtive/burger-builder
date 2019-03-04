import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div 
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
};

// how to do the same thing as shouldComponentUpdate with functional component
// note difference is second argument to memo must return false to trigger update,
// whereas shouldComponentUpdate (as name suggests) needs to return true
// const Modal = React.memo((props) => {
//   return (
//     <Aux>
//         <Backdrop show={props.show} clicked={props.modalClosed}/>
//         <div 
//           className={classes.Modal}
//           style={{
//             transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//             opacity: props.show ? '1' : '0'
//           }}>
//           {props.children}
//         </div>
//       </Aux>
//   )
// }, (prevProps, nextProps) => {
//   return prevProps.show === nextProps.show && prevProps.children === nextProps.children
// });

export default Modal;
