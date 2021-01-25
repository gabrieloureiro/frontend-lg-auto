import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3333/",
	responseType: 'json',
	withCredentials: false
});

export default api


