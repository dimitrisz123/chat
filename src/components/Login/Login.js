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
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginInput: ""
		};
	}

	onLoginChangeHandler = event => {
		this.setState({ loginInput: event.target.value });
	};

	onLoginPressButton = () => {
		fetch("https://evening-harbor-95971.herokuapp.com/user", {
			method: "POST", // or 'PUT'
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				id: this.state.loginInput
			}) // data can be `string` or {object}!
		})
			.then(res => res.json())
			.then(response => {
				if (response.id) {
					this.props.userHandlerLogin(response);
				}
			})
			.catch(error => console.log("User not found"));
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
						<CardHeader title="Login" />
						<TextField
							label="User Id"
							style={{ width: "200px" }}
							type="password"
							margin="normal"
							onChange={this.onLoginChangeHandler}
						/>

						<Button
							onClick={this.onLoginPressButton}
							style={styles.button}
							variant="contained"
						>
							Login
						</Button>
						<Button
							style={{ marginBottom: "20px" }}
							size="small"
							color="primary"
							onClick={() => this.props.changeRoute("register")}
						>
							Click here to register
						</Button>
					</Grid>
				</Card>
			</Grid>
		);
	}
}

export default Login;
