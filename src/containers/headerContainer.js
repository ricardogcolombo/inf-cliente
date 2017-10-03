import React, {
    Component
} from 'react';
import Header from '../components/header/header';
import ButtonContainer from './ButtonContainer.js';
import '../styles/Header.css';

import {withRouter} from "react-router-dom";

const I18n = require('react-redux-i18n').I18n;

class HeaderContainer extends Component {

    navTo(value) {
        this.props.history.push(value);
    }

    onOpenChange(value) {
        console.log('onOpenChange', value);
    }
    navToHome(){
        this.navTo('/');
    }
    handleSelect(info) {
        this.navTo(info.item.props.Key)
    }

    onButtonPress(button) {
        this.navTo(button.props.Key)
    }
    render() {
        let faq = I18n.t('navItems.faq');
        let login = I18n.t('navItems.login');
        let items = [
            <ButtonContainer buttonClassName='navItem Button' Key='faq' key='faq' buttonText={faq} onClickEvent={this.onButtonPress.bind(this)}/>,
            <ButtonContainer buttonClassName='navItem Button login' Key='login' key='login' buttonText={login} onClickEvent={this.onButtonPress.bind(this)}/>
        ];

        return (
            <div className="header">
                <Header onClick={this.navToHome.bind(this)}navItems={items} />
            </div>
        )
    }
}

export default withRouter(HeaderContainer);
