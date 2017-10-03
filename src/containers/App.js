import React, {
    Component
} from 'react';
import '../styles/App.css';
import HeaderContainer from './headerContainer';
import MainContainer from './mainContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
        <HeaderContainer {...this.props}/>
        <MainContainer />

      </div>
        );
    }
}

export default App;
