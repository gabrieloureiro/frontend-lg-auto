export const getClientId = (id) => {
	return {
		type: 'GET_CLIENT_ID',
		payload: id
	}
}
