import Banner from './Banner';
import Content from './Content'
import React, { Component } from 'react';
import './../styles/App.css';


class App extends Component {

	constructor(props){
		super(props);
		this.printAllTabs = this.printAllTabs.bind(this);
		this.state = {
			"printing": false
		}
	}

	printAllTabs() {
		this.setState({"printing": true}, function () {
			window.print()
			this.setState({"printing": false})
		});
	}

	render() {
		return (
			<div className="App">
				<div className="font">
					<Banner printAllTabs={this.printAllTabs} printing={this.state.printing}/>
					<Content printing={this.state.printing}/>
				</div>
			</div>
		);
	}
}

export default App;
