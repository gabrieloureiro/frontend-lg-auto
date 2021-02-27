import { combineReducers } from "redux";
import clients from "./clients/reducer";
import client from "./client/reducer";
import supplier from "./supplier/reducer";
import suppliers from "./suppliers/reducer";

export default combineReducers({
	clients,
	client,
	supplier,
	suppliers
});
