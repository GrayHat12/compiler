import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class Page extends Component {

    openMenu(){}

    render() {
        return (
            <div id="main">
            </div>
        );
    }
}

export default injectStripe(Page);