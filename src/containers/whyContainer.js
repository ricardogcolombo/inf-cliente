import React, {
    Component
} from 'react';

import {
    PropTypes
} from 'prop-types'

import I18n from 'redux-i18n'

class IntentContainer extends React.Component {
    render() {
        let intent= this.context.t('about').intent;
        let firstQuestion = intent.firstQuestion;
        let firstAnswer1 = intent.firstAnswer1;
        let firstAnswer2 = intent.firstAnswer2;
        let firstAnswer3 = intent.firstAnswer3;

        return (
            <div className="intentContainer" >
                <div className="intent">
                    <div className='title'>{firstQuestion}</div>
                    <div className='paragraph'>{firstAnswer1}</div>
                    <div className='paragraph'>{firstAnswer2}</div>
                    <div className='paragraph'>{firstAnswer3}</div>
                </div>
            </div>
        );
    }

}

IntentContainer.contextTypes = {
    t: PropTypes.func.isRequired
}
export default IntentContainer;
