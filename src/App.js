import React from "react";

import { Provider } from "react-redux";
import store from "~/store";

import { Router } from "react-router-dom";

import Routes from "~/routes";
import history from "~/routes/history";

import GlobalStyles from "~/styles/globalStyles";

// @TODO Precisamos incluir o redux e a Store aqui

const App = () => {
	return (
		<Provider store={store}>
			<Router history={history}>
				<GlobalStyles />
				<Routes />
			</Router>
		</Provider>
	);
};

export default App;
