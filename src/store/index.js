import { applyMiddleware, createStore } from "redux";
import rootReducer from "./modules/rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(
			...middlewares
		)
	));

// sagaMiddleware.run()

export default store;
