import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
  checkoutCanceledHandler = () => {
    this.props.history.goBack();
  }

  checkoutContinuedHandler = () => {
    // POST
    this.props.history.replace('/checkout/contact-data');
  }

  render() {
    let summary = <Redirect to="/" />
    if (this.props.ings) {
      summary = (
        <div>
          <CheckoutSummary 
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCanceledHandler}
            checkoutContinued={this.checkoutContinuedHandler }/>
          <Route 
            path={this.props.match.path + '/contact-data'} 
            component={ContactData} /> 
        </div>
      );
    }
    return summary;
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients
  }
};

// const mapDispatchToProps = dispatch => {
//   return {

//   }
// }

export default connect(mapStateToProps, null)(Checkout);
