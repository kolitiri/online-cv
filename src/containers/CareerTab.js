import React, { Component } from 'react';
import { careerState } from './../constants/CareerTabConst.js'
import { Collapse, Table, Grid, Row, Col } from 'react-bootstrap';
import './../styles/Career.css';


class CareerTab extends Component {

	constructor(props){
		super(props);
		this.state = careerState
	}

	expandCollapse(role, index) {
		this.setState(prevState => {
			const newRoles = [...prevState.roles];
			newRoles[index].tabOpen = !role.tabOpen;
			return {roles: newRoles};
		})
	};

	render() {
		return (
			<div>
				{(this.props.printing) && (
					<h1 className="cr-print-header">{this.state.tabName}</h1>
				)}
				{this.state.roles.map((role, index) =>
				<div className={role.cls} key={'role' + index}>
					<Grid fluid>
						<Row className="cr-title-space"
								onClick={() => this.expandCollapse(role, index)}
								aria-expanded={role.tabOpen}
								aria-controls="collapse-details"
								role="button">
							<Col xs={12} sm={9} className="cr-space">
								<div className="cr-title">
									<span>{role.jobTitle}</span>
								</div>
								<div className="cr-desc">{role.jobLocation}</div>
								<div>{role.jobPeriod}</div>
							</Col>
							<Col xsHidden sm={3}>
								<img className={role.jobLogo.cls} src={role.jobLogo.src} alt=""></img>
							</Col>
						</Row>
						<Collapse in={role.tabOpen}>
							<div id="collapse-details">
								<Row className="cr-space">
									<Col xs={12} sm={12} md={3} className="cr-desc">
										<b><u>Job description:</u></b>
									</Col>
									<Col xs={12} sm={12} md={9}>
										{role.jobDesc}
									</Col>
								</Row>

								{role.jobResp ? (
								<Row className="cr-space">
									<Col xs={12} sm={12} md={3} className="cr-desc">
										<b><u>Responsibilities:</u></b>
									</Col>
									<Col xs={12} sm={12} md={9}>
										{role.jobResp}
									</Col>
								</Row>
								) : ( null )}

								{role.sampleWork && role.sampleWork.length ? (
								<Row className="cr-space">
									<Col xs={12} sm={12} md={3} className="cr-desc">
										<b><u>Sample Work:</u></b>
									</Col>
									<Col xs={12} sm={12} md={9}>
										<ul>
										{role.sampleWork.map((sample, index) =>
											<li key={'sample' + index}>{sample}</li>
										)}
										</ul>
									</Col>
								</Row>
								) : ( null )}

								<Row className="cr-space">
									<Col xs={12} sm={12} md={3} className="cr-desc">
										<b><u>Technologies:</u></b>
									</Col>
									<Col xs={12} sm={12} md={9}>
										<Table striped bordered condensed>
											<tbody>
												{role.jobTech.map((tech, index) =>
												<tr key={'tech' + index}>
													<th>{tech.category}</th>
													<td>{tech.text}</td>
												</tr>
												)}
											</tbody>
										</Table>
									</Col>
								</Row>
							</div>
						</Collapse>
					</Grid>
					<hr className="cr-line"></hr>
				</div>
				)}
			</div>
		);
	}
}

export default CareerTab;
