import React, {
    Component
} from 'react';
import '../styles/App.css';
import HeaderContainer from './headerContainer';
import MainContainer from './mainContainer';
import {
    connect
} from 'react-redux'

class App extends Component {
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
