import React from "react";
import { UnloggedLayout } from "~/components/Layout";
import {
	Holder,
	Title,
	TitleWrapper,
	Image,
	Subtitle,
	Header,
	Button,
	Form,
	Input,
	Content,
	FooterWrapper,
} from "./styles";
import { useHistory } from "react-router-dom";

const Login = () => {
	const history = useHistory();

	return (
		<UnloggedLayout>
			<Holder>
				<Content>
					<Header>
						<TitleWrapper>
							<Image
								src={require("~public/assets/img/lg-logo-small-white.svg")}
							/>
							<Title>Autoeletropeças</Title>
						</TitleWrapper>
						<Subtitle>Faça seu login na plataforma</Subtitle>
					</Header>
					<Form>
						<Input type="email" placeholder="LOGIN" id="login" />
						<Input type="password" placeholder="SENHA" id="password" />
						<Button onClick={() => history.push("/dashboard")}>Entrar</Button>
					</Form>
				</Content>
			</Holder>
		</UnloggedLayout>
	);
};

export default Login;
