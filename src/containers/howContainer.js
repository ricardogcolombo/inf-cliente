import React, {
    Component
} from 'react';

var I18n = require('react-redux-i18n').I18n;

class HowContainer extends Component {
    render() {
        let firstQuestion = I18n.t('about.how.firstQuestion');
        let secondQuetion = I18n.t('about.how.secondQuetion');
        let secondAnswer = I18n.t('about.how.secondAnswer');
        let secondParagraph = I18n.t('about.how.paragraph');
        let thirdQuestion = I18n.t('about.how.thirdQuestion');
        let thirdAnswer1 = I18n.t('about.how.thirdAnswer1');
        let thirdAnswer2 = I18n.t('about.how.thirdAnswer2');
        let fourthQuestion = I18n.t('about.how.fourthQuestion');
        let fourthAnswer1 = I18n.t('about.how.fourthAnswer1');
        let fourthAnswer2 = I18n.t('about.how.fourthAnswer2');

        return (
            <div className="how">
            <div className="title"> { firstQuestion }</div>
        <div className='left'>
                <div className="description"> { secondQuetion }</div>
                <div className="description"> { secondAnswer } </div>

            < /div>
            <div className="right">
                <div className="description"> { thirdQuestion } </div>
                <div className="description"> { thirdAnswer1 } </div>
                <div className="description"> { thirdAnswer2 } </div>
                <div className="description"> { fourthQuestion } </div>
                <div className="description"> { fourthAnswer1 } </div>
                <div className="description"> { fourthAnswer2 } </div>

            </div>
          </div>
        )
    }
}

export default HowContainer;
