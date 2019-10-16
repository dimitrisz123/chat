import React, { Component } from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Main from "./components/Main/Main";
import "./App.css";

import { connect } from "react-redux";
import { setRoute, setUser } from "./actions";

const mapStateToProps = state => {
	return {
		route: state.reducer1.route,
		user: state.reducer1.user
	};
};

const mapDispatchToProps = dispatch => {
	return {
		changeRouteHandler: route => dispatch(setRoute(route)),
		userHandler: user => dispatch(setUser(user))
	};
};

class App extends Component {
	componentDidMount() {
		fetch("https://chatback123.herokuapp.com/");
		const JWT = sessionStorage.getItem("JWT");
		if (JWT) {
			fetch("https://chatback123.herokuapp.com/user_id_from_JWT", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: JWT
				}
			})
				.then(resp => resp.json())
				.then(user => {
					this.props.userHandler(user);
					this.props.changeRouteHandler("app");
				})
				.catch(err => console.log("error JWT"));
		}
	}

	render() {
		const { changeRouteHandler, userHandler, user, route } = this.props;
		let page;
		if (route === "register") {
			page = (
				<Register
					changeRoute={changeRouteHandler}
					userHandler={userHandler}
				/>
			);
		} else if (route === "login") {
			page = (
				<Login
					userHandler={userHandler}
					changeRoute={changeRouteHandler}
				/>
			);
		} else if (route === "app") {
			page = <Main user={user} />;
		}

		return <div>{page}</div>;
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
