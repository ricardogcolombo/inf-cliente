import React, {
    Component
} from 'react';
import Header from '../components/header/header';

import {
    PropTypes
} from 'prop-types'

import ButtonContainer from './ButtonContainer.js';
import '../styles/Header.css';
import store from '../store';

import {
    withRouter
} from "react-router-dom";

import {
    setLanguage
} from 'redux-i18n'

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
    onChangeLanguage(lang) {
        store.dispatch(setLanguage(lang.value));
    }
    handleSelect(info) {
        this.navTo(info.item.props.Key)
    }

    onButtonPress(button) {
        this.navTo(button.props.Key)
    }
    render() {
        let faq = this.context.t('nav').faq;
        let login = this.context.t('nav').login;
        let getArrayForDropdown = function(item) {
            return {
                label: item.value,
                value: item.key
            }
        }
        let languages = [{
            value: 'Español',
            key: 'es'
        }, {
            value: 'English',
            key: 'en'
        }].map(getArrayForDropdown);

        let items = [
            <ButtonContainer buttonClassName='navItem Button' Key='faq' buttonText={faq} onClickEvent={this.onButtonPress.bind(this)}/>,
            <ButtonContainer buttonClassName='navItem Button login' Key='login' buttonText={login} onClickEvent={this.onButtonPress.bind(this)}/>
        ];

        return (
            <div className="header">
                <Header languages={languages} onClick={this.navToHome.bind(this)} defaultOption="Español" onSelect={this.onChangeLanguage.bind(this)} navItems={items} />
            </div>
        )
    }
}
HeaderContainer.contextTypes = {
    t: PropTypes.func.isRequired
}
export default withRouter(HeaderContainer);
