/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef } from "react";
import api from '~/services/api'

import * as Yup from "yup";
import getValidationErrors from "~/utils/getValidationErrors";
import { FiUser, FiMail, FiPhone, FiCheckCircle } from "react-icons/fi";

import { LoggedLayout as Layout } from "~/components/Layout";
import { Row } from '~/components/Row'
import Input from '~/components/Input'
import { Form, Button, Card } from './styles'
import UserCard from "~/components/UserCard";


const Clients = () => {
	const formRef = useRef(null);
	const [clients, setClients] = useState([])
	const [dataUpdated, setUpdatedData] = useState(false)

	const formItems = [
		{
			name: "company_name",
			placeholder: "Nome da empresa",
		},
		{
			name: "person_in_charge",
			placeholder: "Nome do encarregado",
		},
		{
			name: "email",
			placeholder: "Email",
		},
		{
			name: "cpf",
			placeholder: "CPF",
		},
		{
			name: "cnpj",
			placeholder: "CNPJ",
		},
	];

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

			api.post('clients', {
				is_company: true,
				company_name: data.company_name,
				person_in_charge: data.person_in_charge,
				cpf: data.cpf,
				cnpj: data.cnpj,
				email: data.email
			})

			event.target.reset();
			setUpdatedData(true)

		} catch (err) {
			const errors = getValidationErrors(err);
			formRef.current?.setErrors(errors);
		}


	}

	return (
		<Layout title="Clientes">
			{/* <Form ref={formRef} onSubmit={handleSubmit}>
				{formItems.map(item => {
					return (
						<Input
							id={item.name}
							name={item.name}
							placeholder={item.placeholder}
						/>
					)
				})}
				<Button submit>Cadastrar</Button>
			</Form> */}
			<Row full>
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />
				<UserCard />

			</Row>
		</Layout>
	);
};

export default Clients;
