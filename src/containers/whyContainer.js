import React, {
    Component
} from 'react';

class WhyContainer extends Component {
    render() {
            let texts = this.context.intl.messages.about.intent;
        return (
            <div className="why">
                <div>{ texts.firstQuestion }</div>
                <div>{ texts.firstAnswer1 }</div>
                <div>{ texts.firstAnswer2 }</div>
                <div>{ texts.firstAnswer3 }</div>
                <div>{ texts.firstAnswer4 }</div>
                <div>{ texts.firstAnswer5 }</div>
      </div>
        )
    }
}

export default WhyContainer;
