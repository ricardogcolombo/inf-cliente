import React, {
    Component
} from 'react';
import ButtonContainer from './ButtonContainer.js';
import {
    withRouter
} from "react-router-dom";
import '../styles/login.css'

const I18n = require('react-redux-i18n').I18n;

class LoginContainer extends Component {
    navTo(value) {
        this.props.history.push(value);
    }

    onButtonPress(button) {
        this.navTo(button.props.Key)
    }
    onSignInGoogle(data) {
        console.log('logeado a google');
        return data
    }
    render() {
        let loginText = I18n.t('login.loginTitle')
        return (
            <div className="login">
            <div className='loginContainer'>
        LOGO
            <div className='loginWithMail'>
            <input className='conocerInput email' placeholder='email'></input>
            <input className='conocerInput password' placeholder='password'></input>
            <ButtonContainer buttonClassName='loginButton' Key='questions' onClickEvent={this.onButtonPress.bind(this)} buttonText={loginText}/>
            </div>
            <div className="g-signin2 googleButton" data-onsuccess="this.onSignInGoogle.bind(this)"></div>
            <div className='facebookLogin'>
            <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
      </div>
      </div>
      </div>
        )
    }
}

export default withRouter(LoginContainer);
