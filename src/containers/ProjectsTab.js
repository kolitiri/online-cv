import React, { Component } from 'react';
import { projectsState } from './../constants/ProjectsTabConst.js'
import { Collapse, Table, Grid, Row, Col } from 'react-bootstrap';
import './../styles/Projects.css';


class ProjectsTab extends Component {

	constructor(props){
		super(props);
		this.state = projectsState
	}

	expandCollapse(project, index) {
		this.setState(prevState => {
			const newProjects = [...prevState.projects];
			newProjects[index].tabOpen = !project.tabOpen;
			return {projects: newProjects};
		})
	};

	render() {
		return (
			<div>
				{(this.props.printing) && (
					<h1 className="pr-print-header">{this.state.tabName}</h1>
				)}
				{this.state.projects.map((project, index) =>
				<div key={'project' + index}>
					<Grid fluid>
						<Row className="pr-title-space"
								onClick={() => this.expandCollapse(project, index)}
								aria-expanded={project.tabOpen}
								aria-controls="collapse-details"
								role="button">
							<Col xs={12} sm={9} className="pr-space">
								<div className="pr-title">
									<span>{project.projectTitle}</span>
								</div>
							</Col>
							{!(this.props.printing) && (
							<Col xs={12} sm={3}>
								{project.projectLogos.map((logo, index) =>
								<a key={'logo' + index} href={logo.href} target="_blank" rel="noopener noreferrer">
									<img className={logo.cls} src={logo.src} alt=""></img>
								</a>
								)}
							</Col>
							)}
						</Row>
						<Collapse in={project.tabOpen}>
							<div id="collapse-details">
								<Row className="pr-space">
									<Col xs={12} sm={12} md={3} className="pr-desc">
										<b><u>Description:</u></b>
									</Col>
									<Col xs={12} sm={12} md={9}>
										{project.projectDesc.map((desc, index) =>
											<p key={'desc' + index}>{desc}</p>
										)}
									</Col>
								</Row>

								<Row className="space">
									<Col xs={12} sm={12} md={3} className="pr-desc">
										<b><u>Technologies:</u></b>
									</Col>
									<Col xs={12} sm={12} md={9}>
										<Table striped bordered condensed>
											<tbody>
												{project.projectTech.map((tech, index) =>
												<tr key={'tech' + index}>
													<th>{tech.category}</th>
													<td>{tech.text}</td>
												</tr>
												)}
											</tbody>
										</Table>
									</Col>
								</Row>

								{project.projectAckn ? (
								<Row className="pr-space">
									<Col xs={12} sm={12} md={3} className="pr-desc">
										<b><u>Acknowledgements:</u></b>
									</Col>
									<Col xs={12} sm={12} md={9}>
										{project.projectAckn}
									</Col>
								</Row>
								) : ( null )}

								{project.projectLinks && !this.props.printing ? (
								<Row className="pr-space">
									<Col xs={12} sm={12} md={3} className="pr-desc">
										<b><u>Related Links:</u></b>
									</Col>
									<Col xs={12} sm={12} md={9}>
										{project.projectLinks.map((link, index) =>
										<span key={'link' + index}>
											<a href={link.href} target="_blank" rel="noopener noreferrer">{link.title}</a>{`, `}
										</span>
										)}
									</Col>
								</Row>
								) : ( null )}
							</div>
						</Collapse>
					</Grid>
					<hr className="pr-line"></hr>
				</div>
				)}
			</div>
		);
	}
}

export default ProjectsTab;
