const SET_MESSAGE = "SET_MESSAGE";
const SET_ROOM = "SET_ROOM";
const SET_ROUTE = "SET_ROUTE";
const SET_USER = "SET_USER";
const GET_MESSAGES = "GET_MESSAGES";
const GET_ROOMS = "GET_ROOMS";
const GET_ROOM_ID = "GET_ROOM_ID";
const CLEAR_MESSAGE_INPUT = "CLEAR_MESSAGE_INPUT";
const CLEAR_ROOM_INPUT = "CLEAR_ROOM_INPUT";

export const setMessageField = text => {
	return {
		type: SET_MESSAGE,
		payload: text
	};
};

export const setRoomField = text => {
	return {
		type: SET_ROOM,
		payload: text
	};
};

export const setRoute = route => {
	return {
		type: SET_ROUTE,
		payload: route
	};
};

export const setUser = text => {
	return {
		type: SET_USER,
		payload: text
	};
};

export const setMessages = messagesArray => {
	return {
		type: GET_MESSAGES,
		payload: messagesArray
	};
};

export const setAllRooms = roomsArray => {
	return {
		type: GET_ROOMS,
		payload: roomsArray
	};
};

export const getRoomId = id => {
	return {
		type: GET_ROOM_ID,
		payload: id
	};
};

export const clearInput = input => {
	if (input === "message") {
		return {
			type: CLEAR_MESSAGE_INPUT
		};
	} else if (input === "room") {
		return {
			type: CLEAR_ROOM_INPUT
		};
	}
};
