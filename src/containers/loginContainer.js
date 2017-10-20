import React, {
    Component
} from 'react';
import ButtonContainer from './ButtonContainer.js';

import {
    PropTypes
} from 'prop-types'
import {
    withRouter
} from "react-router-dom";
import '../styles/login.css'

import {
    GoogleLogin
} from 'react-google-login-component';
import {
    FacebookLogin
} from 'react-facebook-login-component';

class LoginContainer extends Component {
    navTo(value) {
        this.props.history.push(value);
    }

    onButtonPress(button) {
        this.navTo(button.props.Key)
    }
    onSignInGoogle(data) {
        console.log('logeado a google');
        console.log(data);
        
        //TODO: check with backend if it's correct
        this.navTo('/details');
        
    }
    responseFacebook(data) {
        console.log(data);

        //TODO: check with backend if it's correct
        this.navTo('/details');
    }
    render() {
        let loginText = this.context.t('login').loginTitle;

        return (
            <div className="login">
                <div className='loginContainer'>
                    <div className='loginTitle'> {loginText}</div>
                    <div className='loginWithMail'>
                    <input className='conocerInput email' placeholder='email'></input>
                    <input className='conocerInput password' placeholder='password'></input>
                    <ButtonContainer buttonClassName='loginButton' Key='questions' onClickEvent={this.onButtonPress.bind(this)} buttonText={loginText}/>
            </div>
            <div className='socialLogin'>
            <GoogleLogin socialId="1001501503978-aju69hc996t21mkon8kr96f5oqk9c8i3.apps.googleusercontent.com"
                     className="buttonGoogle"
                     scope="profile"
                     responseHandler={this.onSignInGoogle.bind(this)}
                     buttonText="Login With Google"/>

            </div>
            <div className='socialLogin'>
            <FacebookLogin socialId="1944132412535910"
                       language="en_US"
                       scope="public_profile,email"
                       responseHandler={this.responseFacebook.bind(this)}
                       xfbml={true}
                       fields="id,email,name"
                       version="v2.9"
                       className="buttonFacebook"
                       buttonText="Login With Facebook"/>
              </div>
            </div>
          </div>
        )
    }
}

LoginContainer.contextTypes = {
    t: PropTypes.func.isRequired
}
export default withRouter(LoginContainer);
