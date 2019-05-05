const SET_MESSAGE = "SET_MESSAGE";
const SET_ROOM = "SET_ROOM";
const SET_ROUTE = "SET_ROUTE";
const SET_USER = "SET_USER";
const GET_MESSAGES = "GET_MESSAGES";
const GET_ROOMS = "GET_ROOMS";
const GET_ROOM_ID = "GET_ROOM_ID";
const CLEAR_MESSAGE_INPUT = "CLEAR_MESSAGE_INPUT";
const CLEAR_ROOM_INPUT = "CLEAR_ROOM_INPUT";

const initialState = {
	inputMessage: "",
	roomName: "",
	route: "login",
	user: "",
	messages: [],
	rooms: [],
	roomid: null
};

export const reducer1 = (state = initialState, action = {}) => {
	switch (action.type) {
		case SET_MESSAGE:
			return Object.assign({}, state, { inputMessage: action.payload });
		case SET_ROOM:
			return Object.assign({}, state, { roomName: action.payload });
		case SET_ROUTE:
			return Object.assign({}, state, { route: action.payload });
		case SET_USER:
			return Object.assign({}, state, { user: action.payload });
		case GET_MESSAGES:
			return Object.assign({}, state, { messages: action.payload });
		case GET_ROOMS:
			return Object.assign({}, state, { rooms: action.payload });
		case GET_ROOM_ID:
			return Object.assign({}, state, { roomid: action.payload });
		case CLEAR_MESSAGE_INPUT:
			return Object.assign({}, state, {
				inputMessage: initialState.inputMessage
			});
		case CLEAR_ROOM_INPUT:
			return Object.assign({}, state, {
				roomName: initialState.roomName
			});
		default:
			return state;
	}
};

/*const SET_MESSAGE = "SET_MESSAGE";
const SET_ROOM = "SET_ROOM";
const SET_ROUTE = "SET_ROUTE";
const SET_USER = "SET_USER";
const GET_MESSAGES = "GET_MESSAGES";
const GET_ROOMS = "GET_ROOMS";
const GET_ROOM_ID = "GET_ROOM_ID";

const initialMessage = {
	inputMessage: ""
};

export const sendMessage = (state = initialMessage, action = {}) => {
	switch (action.type) {
		case SET_MESSAGE:
			return Object.assign({}, state, { inputMessage: action.payload });
		default:
			return state;
	}
};

const initialRoom = {
	roomName: ""
};

export const addRoom = (state = initialRoom, action = {}) => {
	switch (action.type) {
		case SET_ROOM:
			return Object.assign({}, state, { roomName: action.payload });
		default:
			return state;
	}
};

const initialRoute = {
	route: "login"
};

export const appRoute = (state = initialRoute, action = {}) => {
	switch (action.type) {
		case SET_ROUTE:
			return Object.assign({}, state, { route: action.payload });
		default:
			return state;
	}
};

const initialUser = {
	user: ""
};

export const userName = (state = initialUser, action = {}) => {
	switch (action.type) {
		case SET_USER:
			return Object.assign({}, state, { user: action.payload });
		default:
			return state;
	}
};

const initialMessages = {
	messages: []
};

export const messages = (state = initialMessages, action = {}) => {
	switch (action.type) {
		case GET_MESSAGES:
			return Object.assign({}, state, { messages: action.payload });
		default:
			return state;
	}
};

const initialRooms = {
	rooms: []
};

export const allRooms = (state = initialRooms, action = {}) => {
	switch (action.type) {
		case GET_ROOMS:
			return Object.assign({}, state, { rooms: action.payload });
		default:
			return state;
	}
};

const initialRoomId = {
	roomid: null
};

export const roomId = (state = initialRoomId, action = {}) => {
	switch (action.type) {
		case GET_ROOM_ID:
			return Object.assign({}, state, { roomid: action.payload });
		default:
			return state;
	}
};
*/
