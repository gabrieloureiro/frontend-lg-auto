/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef, useCallback } from "react";

import * as Yup from "yup";
import getValidationErrors from "~/utils/getValidationErrors";

import api from '~/services/api';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { createClient, readClients } from '~/store/modules/clients/actions';
import { getClientId } from '~/store/modules/client/actions';

import { formItems } from './formItems';

import { LoggedLayout as Layout } from "~/components/Layout";
import Input from '~/components/Input';
import UserCard from "~/components/UserCard";
import Modal from '~/components/Modal';
import AddEntityButton from "../../components/AddEntityButton";
import FormButton from '~/components/FormButton';
import { Form, Row } from './styles';

const Clients = () => {

	const formRef = useRef(null);
	const dispatch = useDispatch();
	const history = useHistory();

	const [openAddModal, setOpenAddModal] = useState(false);

	const clients = useSelector(state => state.clients)

	useEffect(() => {
		api.get('clients').then(response => {
			dispatch(readClients(response.data))
		})
	}, [dispatch])

	const handleCreateClient = useCallback((client) => {
		dispatch(createClient(client))
	}, [dispatch])

	const handleReadClients = () => {
		api.get('clients').then(response => {
			dispatch(readClients(response.data))
		})
	};

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

			handleCreateClient(data);

			event.target.reset();

			handleCloseAddModal();

			handleReadClients();

		} catch (err) {
			const errors = getValidationErrors(err);
			formRef.current?.setErrors(errors);
		}
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
