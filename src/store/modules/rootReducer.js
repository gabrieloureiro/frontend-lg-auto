import { combineReducers } from "redux";
import clients from "./clients/reducer";
import client from "./client/reducer";

export default combineReducers({
	clients,
	client
});
