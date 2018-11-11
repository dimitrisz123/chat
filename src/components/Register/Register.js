import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import background from "../assets/photo1.jpg";

const styles = {
	button: {
		margin: "20px auto"
	}
};
class Register extends Component {
	constructor() {
		super();
		this.state = {
			nicknameInput: "",
			useridInput: ""
		};
	}

	onNicknameChangeHandler = event => {
		this.setState({ nicknameInput: event.target.value });
	};

	onUseridChangeHandler = event => {
		this.setState({ useridInput: event.target.value });
	};

	onRegisterPressed = () => {
		fetch("https://evening-harbor-95971.herokuapp.com/create_user", {
			method: "POST", // or 'PUT'
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				id: this.state.nicknameInput,
				name: this.state.useridInput
			}) // data can be `string` or {object}!
		})
			.then(res => res.json())
			.then(response => {
				if (response.id) {
					this.props.userHandler(response);
				}
			})
			.catch(error => console.log("Register failed"));
	};

	render() {
		return (
			<Grid
				container
				justify="center"
				alignItems="center"
				style={{
					height: "100vh",
					backgroundImage: `url(${background})`,
					backgroundSize: "cover"
				}}
			>
				<Card style={{ width: "300px" }}>
					<Grid
						container
						direction="column"
						alignItems="center"
						justify="space-around"
					>
						<CardHeader title="Register" />
						<TextField
							label="Nickname"
							style={{ width: "200px" }}
							type="text"
							margin="normal"
							onChange={this.onNicknameChangeHandler}
						/>
						<TextField
							label="User Id"
							style={{ width: "200px" }}
							type="password"
							margin="normal"
							onChange={this.onUseridChangeHandler}
						/>

						<Button
							onClick={this.onRegisterPressed}
							style={styles.button}
							variant="contained"
						>
							Register
						</Button>
						<Button
							style={{ marginBottom: "20px" }}
							size="small"
							color="primary"
							onClick={() => this.props.changeRoute("login")}
						>
							Click here to login
						</Button>
					</Grid>
				</Card>
			</Grid>
		);
	}
}

export default Register;
