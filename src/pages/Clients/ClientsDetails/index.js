import React, { useState, useEffect } from 'react'
import { LoggedLayout as Layout } from "~/components/Layout";

import api from '~/services/api';

const ClientsDetails = () => {

	let WINDOW = window.location;
	let QUERY = WINDOW.search;
	let PATHNAME = WINDOW.pathname;

	const [currentClient, setCurrentClient] = useState({})

	useEffect(() => {
		if (PATHNAME === '/clients/details') {
			if (QUERY !== '') {
				api.get('clients').then(response => {
					let queryString = QUERY.replace('?id=', '');
					let client = response.data.filter(client => { return client.id === queryString })[0]
					setCurrentClient(client)
				})
			}
		}
	}, [PATHNAME, QUERY])


	return (
		<Layout title={`Usuario`}>{console.log(currentClient)}</Layout>

	)
}

export default ClientsDetails
