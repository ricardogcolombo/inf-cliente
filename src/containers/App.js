import React, {
    Component
} from 'react';
import '../styles/App.css';
import HeaderContainer from './headerContainer';
import MainContainer from './mainContainer';

import {PropTypes} from 'prop-types'
import translations from '../locales/i18n';
import {
    connect
} from 'react-redux'
import {
    setLanguage,
    setTranslations
} from 'redux-i18n'
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="App">
                <HeaderContainer {...this.props} />
                <MainContainer  />
            </div>
        );
    }
}
const mapStateToProps = function(state, ownProps) {
    return {
        lang: state.i18nState.lang,
        translations: state.i18nState.translations
    };
}
export default connect(mapStateToProps)(App);
