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
			UsernameInput: "",
			PasswordInput: ""
		};
	}

	onUsernameChangeHandler = event => {
		this.setState({ UsernameInput: event.target.value });
	};

	onPasswordChangeHandler = event => {
		this.setState({ PasswordInput: event.target.value });
	};

	onRegisterPressed = () => {
		fetch("https://chatback123.herokuapp.com/register", {
			method: "POST", // or 'PUT'
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				userid: this.state.UsernameInput,
				pass: this.state.PasswordInput
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
							label="Username"
							style={{ width: "200px" }}
							type="text"
							margin="normal"
							onChange={this.onUsernameChangeHandler}
						/>
						<TextField
							label="Password"
							style={{ width: "200px" }}
							type="password"
							margin="normal"
							onChange={this.onPasswordChangeHandler}
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
