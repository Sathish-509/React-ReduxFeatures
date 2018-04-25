import React from "react";
import {render} from "react-dom";

import { User } from "./components/User";
import { Main } from "./components/Main";

class App extends React.Component {
	constructor(){
		super();
		this.state = {
			userName: "Sathish",
		}
	}

	changeUsername(newName) {
		this.setState({
			userName: newName
		})
	}

	render() {
		return (
			<div className="container">
				<Main changeUsername={this.changeUsername.bind(this)} />
				<User username={this.state.userName} />
			</div>
		);
	}
}

render(<App/>, document.getElementById("app"));