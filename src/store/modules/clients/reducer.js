/* eslint-disable no-undef */
import produce from 'immer';
import api from '~/services/api';

const clients = (state = [], action) => {
	return produce(state, draft => {
		switch (action.type) {
			case 'CREATE_CLIENT': {
				const client = action.payload;

				draft.push(client);

				api.post('clients', client);

				break;
			}

			case 'READ_CLIENTS': {
				const state = action.payload;

				return state;
			}

			default: {
				return state;
			}
		}
	})
};

export default clients;
