import React, {
    Component
} from 'react';

import {withRouter} from "react-router-dom";
// import {
// DropdownList,
// NumberPicker,
// SelectList
// } from 'react-widgets';

import ButtonContainer from './ButtonContainer.js';
import '../styles/Questions.css'
var I18n = require('react-redux-i18n').I18n;

class QuestionsContainer extends Component {
    navTo(value) {
        this.props.history.push(value);
    }
    onDetailsPress() {
        this.navTo('details')
    }
    render() {

        let gender = I18n.t('answers.gender');
        let school = I18n.t('answers.school');
        let work = I18n.t('answers.work');
        let health = I18n.t('answers.health');
        let family = I18n.t('answers.family');
        let rent = I18n.t('answers.rent');
        let basicAnswer = I18n.t('answers.basicAnswer');

        let descriptionsTitle = I18n.t('calculateInflation');
        let textDescription = I18n.t('firstParagraph');
        let getReport = I18n.t('getReport');

        let questionAge = I18n.t('questions.age');
        let questionGender = I18n.t('questions.gender');
        let questionEducation = I18n.t('questions.lvlEducation');
        let questionEmployee = I18n.t('questions.employee');
        let questionFamily = I18n.t('questions.family');
        let questionMedic = I18n.t('questions.medic');
        let questionRent = I18n.t('questions.rent');
        let questionCar = I18n.t('questions.rent');
        let questionSalary = I18n.t('questions.salary');

        return (
            <div className="questions">
            <div className='descriptionContainer'>
                <div>{descriptionsTitle}</div>
                <div>{textDescription}</div>
            </div>
            <div className='questionsContainer'>
            <div className='question'>{ questionAge }</div>

            <div className='question'>{questionGender}</div>

            <div className='question'>{questionEducation}</div>

            <div className='question'>{questionEmployee}</div>

            <div className='question'>{questionMedic}</div>

            <div className='question'>{questionFamily}</div>

            <div className='question'>{questionRent}</div>

            <div className='question '>{questionCar}</div>
            <div className='question'>{questionSalary}</div>

            <ButtonContainer buttonClassName='getReportButton Button' Key='faq' key='faq' buttonText={getReport} onClickEvent={this.onDetailsPress.bind(this)}/>,
            </div>

            </div>
        )
    }
}

export default withRouter(QuestionsContainer);
