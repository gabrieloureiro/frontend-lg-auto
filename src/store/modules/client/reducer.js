const INITIAL_STATE = {};

const client = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'GET_CLIENT_ID': {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};

export default client;
