/* eslint-disable no-undef */
import produce from 'immer';
import api from '~/services/api';

const suppliers = (state = [], action) => {
	return produce(state, draft => {
		switch (action.type) {
			case 'CREATE_SUPPLIER': {
				const supplier = action.payload;

				draft.push(supplier);

				api.post('suppliers', supplier);

				break;
			}

			case 'READ_SUPPLIERS': {
				const state = action.payload;

				return state;
			}

			default: {
				return state;
			}
		}
	})
};

export default suppliers;
