import React, {
	Component
} from 'react';

import {PropTypes} from 'prop-types'
import {
	withRouter
} from "react-router-dom";

import {
	Input
} from 'semantic-ui-react'


import Dropdown from 'react-dropdown'
import ButtonContainer from './Button.container';
import '../styles/Questions.css'

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
        let detailsQuestions = this.context.t('detailsQuestions');
		let gender = detailsQuestions.answers.gender.map(getArrayForDropdown);
		let school = detailsQuestions.answers.school.map(getArrayForDropdown);
		let work = detailsQuestions.answers.work.map(getArrayForDropdown);;
		let health = detailsQuestions.answers.health.map(getArrayForDropdown);;
		let family = detailsQuestions.answers.family.map(getArrayForDropdown);;
		let rent = detailsQuestions.answers.rent.map(getArrayForDropdown);;
		let basicAnswer = detailsQuestions.answers.basicAnswer.map(getArrayForDropdown);;

		let descriptionsTitle = detailsQuestions.calculateInflation;
		let textDescription = detailsQuestions.firstParagraph;
		let getReport = detailsQuestions.getReport;

		let questionAge = detailsQuestions.questions.age;
		let questionGender = detailsQuestions.questions.gender;
		let questionEducation = detailsQuestions.questions.lvlEducation;
		let questionEmployee = detailsQuestions.questions.employee;
		let questionFamily = detailsQuestions.questions.family;
		let questionMedic = detailsQuestions.questions.medic;
		let questionRent = detailsQuestions.questions.rent;
		let questionCar = detailsQuestions.questions.rent;
		let questionSalary = detailsQuestions.questions.salary;

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
            <ButtonContainer buttonClassName='getReportButton Button' Key='faq' buttonText={getReport} onClickEvent={this.onDetailsPress.bind(this)}/>,
            </div>
            </div>
		)
	}
}

QuestionsContainer.contextTypes = {
  t: PropTypes.func.isRequired
}

export default withRouter(QuestionsContainer);
