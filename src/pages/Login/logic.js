import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
	email: Yup.string().email().required("E-mail Obrigatório"),
	password: Yup.string()
		.required("Senha é obrigatório")
		.min(3, "Senha é muito curta"),
});
