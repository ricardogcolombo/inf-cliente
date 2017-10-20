import React, {
    Component
} from 'react';
import {
    Switch,
    Route,
    Link
} from 'react-router-dom'

import landingPage from './landingPageContainer';
import QuestionsContainer from './questionsContainer';
import LoginContainer from './loginContainer';
import FaqContainer from './faqContainer';
import DetailContainer from './detailContainer';

import '../styles/main.css';
class MainContainer extends Component {
    render() {
        return (
            <div className="main">
            <Switch>
                <Route exact path="/" component={landingPage} />
                <Route path="/questions" component={QuestionsContainer} />
                <Route path="/faq" component={FaqContainer} />
                <Route path="/login" component={LoginContainer} />
                <Route path="/details" component={DetailContainer} />
            </Switch>
            </div>
        )
    }
}

export default MainContainer;
