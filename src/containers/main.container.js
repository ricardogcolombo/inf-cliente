import React, {
  Component
} from 'react';

import {
  Switch,
  Route
} from 'react-router-dom'

import landingPage from './landingPage.container';
import QuestionsContainer from './questions.container';
import LoginContainer from './login.container';
import FaqContainer from './faq.container';
import DetailContainer from './detail.container';

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
