import React, {
    Component
} from 'react';

var I18n = require('react-redux-i18n').I18n;
class IntentContainer extends React.Component {
            render() {

                let firstQuestion =I18n.t('about.intent.firstQuestion');
                let firstAnswer1 = I18n.t('about.intent.firstAnswer1');
                let firstAnswer2 = I18n.t('about.intent.firstAnswer2');
                let firstAnswer3 = I18n.t('about.intent.firstAnswer3');

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
export default IntentContainer;
