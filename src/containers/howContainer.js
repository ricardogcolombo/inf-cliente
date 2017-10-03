import React, {
    Component
} from 'react';

class HowContainer extends Component {
    render() {
            let texts = this.context.intl.messages.about.how;
        return (
            <div className="how">
                <div>{ texts.firstQuestion }</div>
                <div>{ texts.secondQuetion }</div>
                <div> { texts.secondAnswer } </div>
                <div> { texts.secondParagraph } </div>
                <div> { texts.thirdQuestion } </div>
                <div> { texts.thirdAnswer1 } </div>
                <div> { texts.thirdAnswer2 } </div>
                <div> { texts.fourthQuestion } </div>
                <div> { texts.fourthAnswer1 } </div>
                <div> { texts.fourthAnswer2 } </div>
          </div>
        )
    }
}

export default HowContainer;
