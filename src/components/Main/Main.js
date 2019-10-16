import React, { Component } from "react";
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";
import Addroom from "../Addroom/Addroom";
import Messages from "../Messages/Messages";
import NewMessage from "../NewMessage/NewMessage";
import Rooms from "../Rooms/Rooms";

import { connect } from "react-redux";
import {
	setMessageField,
	setRoomField,
	setMessages,
	setAllRooms,
	getRoomId,
	clearInput
} from "../../actions.js";

import { instanceLocator, tokenProvider } from "./initialize";

const mapStateToProps = state => {
	return {
		inputMessage: state.reducer1.inputMessage,
		roomName: state.reducer1.roomName,
		messages: state.reducer1.messages,
		rooms: state.reducer1.rooms,
		roomid: state.reducer1.roomid
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onInputMessage: event => dispatch(setMessageField(event.target.value)),
		onInputRoom: event => dispatch(setRoomField(event.target.value)),
		allMessages: data => dispatch(setMessages(data)),
		allRooms: data => dispatch(setAllRooms(data)),
		getRoomId: id => dispatch(getRoomId(id)),
		clearMessageInput: () => dispatch(clearInput("message")),
		clearRoomInput: () => dispatch(clearInput("room"))
	};
};

class Main extends Component {
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
				const token =
					currentUser.cursorsInstance.tokenProvider.cachedToken;
				sessionStorage.setItem("JWT", token);
			})
			.catch(err => {
				console.log("Error on connection", err);
			});
	}

	subscribeToRoom = roomid => {
		this.props.allMessages([]);
		this.props.getRoomId(roomid);
		this.currentUser
			.subscribeToRoomMultipart({
				roomId: roomid,
				hooks: {
					onMessage: message => {
						this.props.allMessages([
							...this.props.messages,
							message
						]);
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
				this.props.allRooms([...rooms, ...this.currentUser.rooms]);
			})
			.catch(err => {
				console.log(`Error getting joinable rooms: ${err}`);
			});
	};

	createRoom = e => {
		e.preventDefault();
		this.currentUser
			.createRoom({
				name: this.props.roomName
			})
			.then(room => {
				if (room) {
					this.props.clearRoomInput();
					// this.setState({ roomName: "" });
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
			.sendSimpleMessage({
				text: this.props.inputMessage,
				roomId: this.props.roomid
			})
			.then(messageId => {
				console.log(messageId);
				if (messageId) {
					this.props.clearMessageInput();
				}
			})
			.catch(err => {
				console.log(`Error adding message to my room: ${err}`);
			});
	};

	render() {
		const {
			onInputMessage,
			onInputRoom,
			roomName,
			inputMessage,
			rooms,
			messages,
			roomid
		} = this.props;
		return (
			<div className="app">
				<div className="top-row">
					<Rooms
						subscribeToRoom={this.subscribeToRoom}
						rooms={rooms}
					/>
					<Messages messages={messages} />
				</div>
				<div className="bottom-row">
					<Addroom
						createRoom={this.createRoom}
						inputRoom={onInputRoom}
						value={roomName}
					/>
					<NewMessage
						disabled={!roomid}
						sendMessage={this.sendMessage}
						inputMessage={onInputMessage}
						value={inputMessage}
					/>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Main);
