import React, { useState, useEffect } from 'react';
import { LoggedLayout as Layout } from "~/components/Layout";

import api from '~/services/api';

import { useSelector } from 'react-redux';

const ClientsDetails = () => {

	const clientId = useSelector(state => state.client)
	const [currentClient, setCurrentClient] = useState({});

	useEffect(() => {
		api.get(`clients/${clientId}`).then(response => {
			setCurrentClient(response.data)
		})
	}, [clientId])

	return (
		<Layout title={currentClient ?
			currentClient.is_company ?
				currentClient.company_name :
				currentClient.person_in_charge : 'Carregando...'
		}></Layout>

	)
}

export default ClientsDetails
