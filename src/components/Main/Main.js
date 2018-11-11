import React, { Component } from "react";
import { ChatManager, TokenProvider } from "@pusher/chatkit";
import Addroom from "../Addroom/Addroom";
import Messages from "../Messages/Messages";
import NewMessage from "../NewMessage/NewMessage";
import Rooms from "../Rooms/Rooms";
import { instanceLocator, tokenProvider } from "./initialize";

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
			rooms: [],
			inputMessage: "",
			roomName: "",
			roomid: null
		};
	}

	componentDidMount() {
		const chatManager = new ChatManager({
			instanceLocator: instanceLocator,
			userId: this.props.user.id,
			tokenProvider: new TokenProvider({
				url: tokenProvider
			})
		});

		chatManager
			.connect()
			.then(currentUser => {
				this.currentUser = currentUser;
				this.getAllRooms();
			})
			.catch(err => {
				console.log("Error on connection", err);
			});
	}

	subscribeToRoom = roomid => {
		this.setState({ messages: [], roomid: roomid });
		this.currentUser
			.subscribeToRoom({
				roomId: roomid,
				hooks: {
					onNewMessage: message => {
						this.setState({
							messages: [...this.state.messages, message]
						});
					}
				},
				messageLimit: 10
			})
			.catch(err => console.log("something went wrong"));
	};

	getAllRooms = () => {
		this.currentUser
			.getJoinableRooms()
			.then(rooms => {
				this.setState({ rooms: [...rooms, ...this.currentUser.rooms] });
			})
			.catch(err => {
				console.log(`Error getting joinable rooms: ${err}`);
			});
	};

	inputMessage = event => {
		this.setState({ inputMessage: event.target.value });
	};

	inputRoom = event => {
		this.setState({ roomName: event.target.value });
	};

	createRoom = e => {
		e.preventDefault();
		this.currentUser
			.createRoom({
				name: this.state.roomName
			})
			.then(room => {
				if (room) {
					this.setState({ roomName: "" });
					this.getAllRooms();
					this.subscribeToRoom(room.id);
				}
			})
			.catch(err => {
				console.log(`Error creating room ${err}`);
			});
	};

	sendMessage = e => {
		e.preventDefault();
		this.currentUser
			.sendMessage({
				text: this.state.inputMessage,
				roomId: this.state.roomid
			})

			.then(messageId => {
				if (messageId) {
					this.setState({ inputMessage: "" });
				}
			})
			.catch(err => {
				console.log(`Error adding message to my room: ${err}`);
			});
	};

	render() {
		return (
			<div className="app">
				<div className="top-row">
					<Rooms
						subscribeToRoom={this.subscribeToRoom}
						rooms={this.state.rooms}
					/>
					<Messages messages={this.state.messages} />
				</div>
				<div className="bottom-row">
					<Addroom
						createRoom={this.createRoom}
						inputRoom={this.inputRoom}
						value={this.state.roomName}
					/>
					<NewMessage
						disabled={!this.state.roomid}
						sendMessage={this.sendMessage}
						inputMessage={this.inputMessage}
						value={this.state.inputMessage}
					/>
				</div>
			</div>
		);
	}
}
export default Main;
