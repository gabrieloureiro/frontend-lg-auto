/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { LoggedLayout as Layout } from "~/components/Layout";
import { formItems } from './formItems';

import api from '~/services/api'

import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
// import { addClient } from '~/store/modules/clients/actions';
import { getClientId } from '~/store/modules/client/actions';

// import { FiUser, FiMail, FiPhone, FiCheckCircle } from "react-icons/fi";
import * as Yup from "yup";
import getValidationErrors from "~/utils/getValidationErrors";
import Input from '~/components/Input'
import UserCard from "~/components/UserCard";
import Modal from '~/components/Modal'
import AddEntityButton from "../../components/AddEntityButton";
import FormButton from '~/components/FormButton'

import { Form, Row } from './styles';

const Clients = () => {
	const formRef = useRef(null);
	const dispatch = useDispatch();
	const history = useHistory();

	const [clients, setClients] = useState([])
	const [openAddModal, setOpenAddModal] = useState(false);
	const [dataUpdated, setUpdatedData] = useState(false)

	useEffect(() => {
		api.get('clients').then(response => {
			setClients(response.data)
		})
	}, [])

	useEffect(() => {
		api.get('clients').then(response => {
			setClients(response.data)
		})
		setUpdatedData(false)
	}, [dataUpdated])

	const handleSubmit = async (data, { reset }, event) => {
		event.persist();
		try {
			formRef.current?.setErrors({});
			const schema = Yup.object().shape({
				company_name: Yup.string().required(),
				person_in_charge: Yup.string().required(),
				email: Yup.string()
					.required()
					.email(),
				cpf: Yup.string().required(),
				cnpj: Yup.string().required(),
			});

			await schema.validate(data, { abortEarly: false });

			console.log("deucerto", data)

			// api.post('clients', {
			// 	is_company: true,
			// 	company_name: data.company_name,
			// 	person_in_charge: data.person_in_charge,
			// 	cpf: data.cpf,
			// 	cnpj: data.cnpj,
			// 	email: data.email
			// })

			// event.target.reset();

			handleCloseAddModal();
			setUpdatedData(true);

		} catch (err) {
			const errors = getValidationErrors(err);
			formRef.current?.setErrors(errors);
		}
	}

	// const handleAddClient = useCallback(() => {
	// 	dispatch(addClient(client))
	// }, [dispatch])

	const handleShowClientDetails = useCallback((id) => {
		dispatch(getClientId(id))
		history.push('clients/details')
	}, [dispatch, history])

	const handleOpenAddModal = () => {
		setOpenAddModal(true);
	}

	const handleCloseAddModal = () => {
		setOpenAddModal(false);
	}

	return (
		<Layout title="Clientes">
			<AddEntityButton onClick={handleOpenAddModal} />
			<Row full>
				{clients.map((client, index) => {
					return (
						<UserCard
							key={index}
							id={client.id}
							is_company={client.is_company}
							company_name={client.company_name}
							person_in_charge={client.person_in_charge}
							email={client.email}
							onClick={() => handleShowClientDetails(client.id)}
						/>
					)
				})}
			</Row>
			{openAddModal ?
				<Modal
					title="Cadastrar cliente"
					open={openAddModal}
					onClose={handleCloseAddModal}
				>
					<Form ref={formRef} onSubmit={handleSubmit}>
						{formItems.map((item, index) => {
							return (
								<Input
									key={index}
									id={item.name}
									name={item.name}
									placeholder={item.placeholder}
								/>
							)
						})}
						<Row end full>
							<FormButton
								cancel
								onClose={handleCloseAddModal}
							>
								Cancelar
							</FormButton>
							<FormButton submit>Cadastrar</FormButton>
						</Row>
					</Form>
				</Modal> : null}
		</Layout>
	);
};

export default Clients;
