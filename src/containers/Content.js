import React, { Component } from 'react';
import CareerTab from './CareerTab';
import EducationTab from './EducationTab';
import ProjectsTab from './ProjectsTab';
import { contentState } from './../constants/ContentConst.js'
import { Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import './../styles/Content.css';


class Content extends Component {

	constructor(props){
		super(props);
		this.state = contentState
	}

	switchTab = (selectedKey) => {
		this.setState({"activeTab": selectedKey})
	}

	render() {
		return (
			<div>
				<Grid fluid>
					{(!this.props.printing) && (
						<Row className="tabs-space">
							<Col xsHidden sm={2}></Col>
							<Col xs={12} sm={8}>
								<Nav justified bsStyle="pills" activeKey={this.state.activeTab} onSelect={this.switchTab}>
								{this.state.navItems.map(item =>
									<NavItem bsclass="nav-pills" key={item.name} eventKey={item.tab}>
										{item.text}
									</NavItem>
								)}
				  				</Nav>
							</Col>
							<Col xsHidden sm={2}></Col>
						</Row>
					)}
					<Row>
						<Col xsHidden sm={2}></Col>
						<Col xs={12} sm={8}>
							{(this.state.activeTab === 'CareerTab' || this.props.printing) && <CareerTab printing={this.props.printing}/>}
							{(this.state.activeTab === 'EducationTab' || this.props.printing) && <EducationTab printing={this.props.printing}/>}
							{(this.state.activeTab === 'ProjectsTab' || this.props.printing) && <ProjectsTab printing={this.props.printing}/>}
						</Col>
						<Col xsHidden sm={2}></Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

export default Content;
