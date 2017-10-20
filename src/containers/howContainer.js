import React, {
    Component
} from 'react';
import {
    PropTypes
} from 'prop-types'

class HowContainer extends Component {
    render() {
        let about = this.context.t('about').how;

        let firstQuestion = about.firstQuestion;
        let secondQuetion = about.secondQuetion;
        let secondAnswer = about.secondAnswer;
        let secondParagraph = about.paragraph;
        let thirdQuestion = about.thirdQuestion;
        let thirdAnswer1 = about.thirdAnswer1;
        let thirdAnswer2 = about.thirdAnswer2;
        let fourthQuestion = about.fourthQuestion;
        let fourthAnswer1 = about.fourthAnswer1;
        let fourthAnswer2 = about.fourthAnswer2;

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

HowContainer.contextTypes = {
    t: PropTypes.func.isRequired
}
export default HowContainer;
