const INITIAL_STATE = {};

const supplier = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'GET_SUPPLIER_ID': {
			return action.payload;
		}
		default: {
			return state;
		}
	}
};

export default supplier;
