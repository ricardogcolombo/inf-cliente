import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux'

// styles
import '../styles/App.css';
// store and api functions

// containers
import HeaderContainer from './header.container';
import MainContainer from './main.container';

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

export default App;
