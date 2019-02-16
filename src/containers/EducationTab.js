import React, { Component } from 'react';
import { educationState } from './../constants/EducationTabConst.js'
import { Grid, Row, Col } from 'react-bootstrap';
import './../styles/Education.css';


class EducationTab extends Component {

	constructor(props){
		super(props);
		this.state = educationState
	}

	render() {
		return (
			<div>
				{(this.props.printing) && (
					<h1 className="ed-print-header">{this.state.tabName}</h1>
				)}
				{this.state.education.map((edu, index) =>
				<div key={'edu' + index}>
					<Grid fluid>
						<Row className="ed-title-space">
							<Col xs={12} sm={9} className="ed-space">
								<div className="ed-title">
									<span>{edu.eduTitle}</span>
								</div>
								<div className="ed-desc">{edu.eduLocation}</div>
								<div>{edu.eduPeriod}</div>
							</Col>
							<Col xsHidden sm={3}>
								<img className={edu.eduLogo.cls} src={edu.eduLogo.src} alt=""></img>
							</Col>
						</Row>

						{edu.eduModules && edu.eduModules.length ? (
						<Row className="ed-space">
							<Col xs={12} sm={12} md={3} className="ed-desc">
								<b><u>Key Modules:</u></b>
							</Col>
							<Col xs={12} sm={12} md={9}>
								<ul>
								{edu.eduModules.map((module, index) =>
									<li key={'module' + index}>{module}</li>
								)}
								</ul>
							</Col>
						</Row>
						) : ( null )}

						{edu.eduThesis ? (
						<Row className="ed-space">
							<Col xs={12} sm={12} md={3} className="ed-desc">
								<b><u>Thesis:</u></b>
							</Col>
							<Col xs={12} sm={12} md={9}>
								{edu.eduThesis.title}
								<br />
								{edu.eduThesis.content}
							</Col>
						</Row>
						) : ( null )}

					</Grid>
					<hr className="ed-line"></hr>
				</div>
				)}
			</div>
		);
	}
}

export default EducationTab;
