export const createClient = (client) => {
	return {
		type: 'CREATE_CLIENT',
		payload: client
	}
}

export const readClients = (clients) => {
	return {
		type: "READ_CLIENTS",
		payload: clients
	}
}
