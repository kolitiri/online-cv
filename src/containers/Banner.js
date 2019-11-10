import React, { Component } from 'react';
import { bannerState } from './../constants/BannerConst.js'
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';
import './../styles/Banner.css';


class Banner extends Component {

	constructor(props){
		super(props);
		this.state = bannerState;
	}

	print = (e) => {
		this.props.printAllTabs()
	};

	render() {
		return (
			<div>
				{(!this.props.printing) && (
				<Jumbotron className="bn-banner">
					<h1 className="bn-author-name">{this.state.authorName}</h1>
					<Grid fluid>
						<Row>
							<Col xsHidden smHidden className="bn-logos-left">
								<button data-toggle="modal" className="bn-printer" onClick={this.print}>
									<span title="Print" className="glyphicon glyphicon-print"></span>
								</button>
							</Col>
							<Col xs={3} sm={6}></Col>
							<Col xs={9} sm={5} className="bn-logos-right">
								{this.state.logos.map(logo =>
									<a key={logo.name} href={logo.href} target="_blank" rel="noopener noreferrer">
										<img title={logo.name} className="bn-circle-img bn-logo" src={logo.src} alt=""></img>
									</a>
								)}
							</Col>
						</Row>
					</Grid>
				</Jumbotron>
				)}
			</div>
		);
	}
}

export default Banner;
