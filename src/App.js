import React, { Component } from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Main from "./components/Main/Main";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			route: "login",
			user: ""
		};
	}

	changeRouteHandler = route => {
		this.setState({ route: route });
	};

	userHandler = user => {
		this.setState({ user: user, route: "app" });
	};

	userHandlerLogin = user => {
		this.setState({ user: user, route: "app" });
	};

	render() {
		let page;
		if (this.state.route === "register") {
			page = (
				<Register
					changeRoute={this.changeRouteHandler}
					userHandler={this.userHandler}
				/>
			);
		} else if (this.state.route === "login") {
			page = (
				<Login
					userHandlerLogin={this.userHandlerLogin}
					changeRoute={this.changeRouteHandler}
				/>
			);
		} else if (this.state.route === "app") {
			page = <Main user={this.state.user} />;
		}

		return <div>{page}</div>;
	}
}

export default App;
