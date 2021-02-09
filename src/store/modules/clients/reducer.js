import produce from 'immer';

const INITIAL_STATE = [{}];

const clients = (state = INITIAL_STATE, action) => {
	return produce(state, draft => {
		switch (action.type) {
			case 'ADD_CLIENT': {
				const { client } = action.payload;

				draft.clients.push({ client })

				break
			}

			default: {
				return state;
			}
		}
	})
};

export default clients;
