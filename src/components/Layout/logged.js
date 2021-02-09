import React, { useState } from "react";
import Head from "~/components/Head";
import Sidebar from "~/components/Sidebar";
import Topbar from "~/components/Topbar";
import Header from "~/components/Header";
import { Container } from "./styles";
import { ThemeProvider } from "emotion-theming";
import { lightTheme, darkTheme, colors } from "~/styles/themes";
import { Provider } from 'react-redux';
import store from '~/store';

const LoggedLayout = ({ title, description, subtitle, children }) => {
	const [collapsed, setCollapsed] = useState(true);
	const stored = localStorage.getItem("isDarkMode");
	const [isDarkMode, setIsDarkMode] = useState(
		stored === "true" ? true : false
	);

	let theme = { ...lightTheme, ...colors };

	const handleCollapsed = () => {
		if (collapsed) {
			setCollapsed(false);
			return collapsed;
		}
		setCollapsed(true);
		return collapsed;
	};

	const handleTheme = () => {
		setIsDarkMode(!isDarkMode);
		localStorage.setItem("isDarkMode", !isDarkMode);
	};

	return (
		<ThemeProvider
			theme={!isDarkMode ? theme : (theme = { ...darkTheme, ...colors })}
		>
			<Provider store={store}>
				<Head title={title} description={description} />
				<Sidebar isLogged collapse={collapsed} />
				<Topbar
					collapse={collapsed}
					handleCollapsed={handleCollapsed}
					isDarkMode={isDarkMode}
					handleTheme={handleTheme}
				/>
				<Container sideBarCollapse={collapsed}>
					<Header title={title} subtitle={subtitle} />
					{children}
				</Container>
			</Provider>
		</ThemeProvider>
	);
};

export default LoggedLayout;
