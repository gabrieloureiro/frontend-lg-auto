export const createSupplier = (supplier) => {
	return {
		type: 'CREATE_SUPPLIER',
		payload: supplier
	}
}

export const readSuppliers = (suppliers) => {
	return {
		type: "READ_SUPPLIERS",
		payload: suppliers
	}
}
