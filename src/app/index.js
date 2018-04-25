/*import React from "react";
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
*/

import { createStore } from "redux";

const initialState = {
	result: 1,
	lastValues: []
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD":
			state = {
				...state,
				result: state.result + action.payload,
				lastValues: [...state.lastValues, action.payload]
			};
			break;
		case "SUBTRACT":
			state = {
				...state,
				result: state.result - action.payload,
				lastValues: [...state.lastValues, action.payload]
			};
			state.lastValues.push(action.payload);
			break;
	}
	return state;
}

const store = createStore(reducer);

store.subscribe(() => {
	console.log("Store Updated ", store.getState());
});

store.dispatch({
	type: "ADD",
	payload: 100
});

store.dispatch({
	type: "ADD",
	payload: 20
});

store.dispatch({
	type: "SUBTRACT",
	payload: 30
});