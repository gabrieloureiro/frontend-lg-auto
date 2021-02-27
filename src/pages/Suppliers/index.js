/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useRef, useCallback } from "react";

import * as Yup from "yup";
import getValidationErrors from "~/utils/getValidationErrors";

import api from '~/services/api';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { createSupplier, readSuppliers } from '~/store/modules/suppliers/actions';
import { getSupplierId } from '~/store/modules/supplier/actions';

import { formItems } from './formItems';

import { LoggedLayout as Layout } from "~/components/Layout";
import Input from '~/components/Input';
import UserCard from "~/components/UserCard";
import Modal from '~/components/Modal';
import AddEntityButton from "../../components/AddEntityButton";
import FormButton from '~/components/FormButton';
import { Form, Row } from './styles';

const Suppliers = () => {

	const formRef = useRef(null);
	const dispatch = useDispatch();
	const history = useHistory();

	const [openAddModal, setOpenAddModal] = useState(false);

	const suppliers = useSelector(state => state.suppliers)

	useEffect(() => {
		api.get('suppliers').then(response => {
			dispatch(readSuppliers(response.data))
		})
	}, [dispatch])

	const handleCreateSupplier = useCallback((supplier) => {
		dispatch(createSupplier(supplier))
	}, [dispatch])

	const handleReadSuppliers = () => {
		api.get('suppliers').then(response => {
			dispatch(readSuppliers(response.data))
		})
	};

	const handleShowSupplierDetails = useCallback((id) => {
		dispatch(getSupplierId(id))
		history.push('suppliers/details')
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

			handleCreateSupplier(data);

			event.target.reset();

			handleCloseAddModal();

			handleReadSuppliers();

		} catch (err) {
			const errors = getValidationErrors(err);
			formRef.current?.setErrors(errors);
		}
	}

	return (
		<Layout title="Fornecedores">
			<AddEntityButton onClick={handleOpenAddModal} />
			<Row full>
				{suppliers.map((supplier, index) => {
					return (
						<UserCard
							key={index}
							id={supplier.id}
							is_company={supplier.is_company}
							company_name={supplier.company_name}
							person_in_charge={supplier.person_in_charge}
							email={supplier.email}
							onClick={() => handleShowSupplierDetails(supplier.id)}
						/>
					)
				})}
			</Row>
			{openAddModal ?
				<Modal
					title="Cadastrar Fornecedor"
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

export default Suppliers;
