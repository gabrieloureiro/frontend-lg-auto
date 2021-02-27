import React, { useState, useEffect } from 'react';
import { LoggedLayout as Layout } from "~/components/Layout";

import api from '~/services/api';

import { useSelector } from 'react-redux';

const SuppliersDetails = () => {

	const supplierId = useSelector(state => state.supplier)
	const [currentSupplier, setCurrentSupplier] = useState({});

	useEffect(() => {
		api.get(`suppliers/${supplierId}`).then(response => {
			setCurrentSupplier(response.data)
		})
	}, [supplierId])

	return (
		<Layout title={currentSupplier ?
			currentSupplier.is_company ?
				currentSupplier.company_name :
				currentSupplier.person_in_charge : 'Carregando...'
		}></Layout>

	)
}

export default SuppliersDetails
