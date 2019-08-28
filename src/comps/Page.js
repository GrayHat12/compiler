import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class Page extends Component {

    render() {
        return (
            <div id="list">
                <button name="Java"/>
                
            </div>
        );
    }
}

export default injectStripe(Page);