import React, {
	Component
} from 'react';
import {
	withRouter
} from "react-router-dom";


import {
	Input,
	Dropdown
} from 'semantic-ui-react'
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
		let getArrayForDropdown = function(item) {
			return {
				label: item,
				value: item
			}
		}
		let gender = I18n.t('detailsQuestions.answers.gender').map(getArrayForDropdown);
		let school = I18n.t('detailsQuestions.answers.school').map(getArrayForDropdown);
		let work = I18n.t('detailsQuestions.answers.work').map(getArrayForDropdown);;
		let health = I18n.t('detailsQuestions.answers.health').map(getArrayForDropdown);;
		let family = I18n.t('detailsQuestions.answers.family').map(getArrayForDropdown);;
		let rent = I18n.t('detailsQuestions.answers.rent').map(getArrayForDropdown);;
		let basicAnswer = I18n.t('detailsQuestions.answers.basicAnswer').map(getArrayForDropdown);;

		let descriptionsTitle = I18n.t('detailsQuestions.calculateInflation');
		let textDescription = I18n.t('detailsQuestions.firstParagraph');
		let getReport = I18n.t('detailsQuestions.getReport');

		let questionAge = I18n.t('detailsQuestions.questions.age');
		let questionGender = I18n.t('detailsQuestions.questions.gender');
		let questionEducation = I18n.t('detailsQuestions.questions.lvlEducation');
		let questionEmployee = I18n.t('detailsQuestions.questions.employee');
		let questionFamily = I18n.t('detailsQuestions.questions.family');
		let questionMedic = I18n.t('detailsQuestions.questions.medic');
		let questionRent = I18n.t('detailsQuestions.questions.rent');
		let questionCar = I18n.t('detailsQuestions.questions.rent');
		let questionSalary = I18n.t('detailsQuestions.questions.salary');

		return (
			<div className="questions">
            <div className='descriptionContainer'>
                <div className="title">{descriptionsTitle}</div>
                <div className="description">{textDescription}</div>
			</div>
			<div className="questionsContainer">
				<div className='questionsContainerItem'>
					<div className='question'>{ questionAge }</div>
					<Input className="inputForm"/>
					<div className='question'>{questionGender}</div>
					<Dropdown className="dropdownForm" placeholder='Gender' search selection options={gender} />

					<div className='question'>{questionEducation}</div>
					<Dropdown className="dropdownForm" placeholder='Degree' search selection options={school} />

				</div >
				<div className='questionsContainerItem'>
					<div className='question'>{questionEmployee}</div>
					<Dropdown className="dropdownForm" placeholder='Employee Situation' search selection options={work} />

					<div className='question'>{questionMedic}</div>
					<Dropdown className="dropdownForm" placeholder='health' search selection options={health} />

					<div className='question'>{questionFamily}</div>
					<Dropdown placeholder='family' search selection options={family} className="dropdownForm" />

				</div >
				<div className='questionsContainerItem'>
					<div className='question'>{questionRent}</div>
					<Dropdown placeholder='House Status' search selection options={rent} className="dropdownForm" />

					<div className='question '>{questionCar}</div>
					<Dropdown placeholder='Car' search selection options={basicAnswer} className="dropdownForm" />

					<div className='question'>{questionSalary}</div>
					<Input  className="inputForm" />
				</div>

			</div>
			<div className='reportButton'>
            <ButtonContainer buttonClassName='getReportButton Button' Key='faq' key='faq' buttonText={getReport} onClickEvent={this.onDetailsPress.bind(this)}/>,
            </div>
            </div>
		)
	}
}

export default withRouter(QuestionsContainer);
