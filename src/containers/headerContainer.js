import React, {
    Component
} from 'react';
import Header from '../components/header/header';
import {
    loadTranslations,
    setLocale,
    syncTranslationWithStore
} from 'react-redux-i18n';
import ButtonContainer from './ButtonContainer.js';
import '../styles/Header.css';
import i18n from '../locales/i18n';
import store from '../store';

import {
    withRouter
} from "react-router-dom";

const I18n = require('react-redux-i18n').I18n;

class HeaderContainer extends Component {

    navTo(value) {
        this.props.history.push(value);
    }

    onOpenChange(value) {
        console.log('onOpenChange', value);
    }
    navToHome() {
        this.navTo('/');
    }
    onChangeLanguage() {
        store.dispatch(setLocale('es'));
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
        let getArrayForDropdown = function(item) {
            return {
                label: item,
                value: item
            }
        }
        let languages = ['ESPAÑOL', 'ENGLISH'].map(getArrayForDropdown);

        let items = [
            <ButtonContainer buttonClassName='navItem Button' Key='faq' key='faq' buttonText={faq} onClickEvent={this.onButtonPress.bind(this)}/>,
            <ButtonContainer buttonClassName='navItem Button login' Key='login' key='login' buttonText={login} onClickEvent={this.onButtonPress.bind(this)}/>
        ];

        return (
            <div className="header">
                <Header languages={languages} onClick={this.navToHome.bind(this)} defaultOption="Español" onSelect={this.onChangeLanguage.bind(this)} navItems={items} />
            </div>
        )
    }
}

export default withRouter(HeaderContainer);
