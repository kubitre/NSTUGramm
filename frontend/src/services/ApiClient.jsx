import axios from 'axios';

const apiUrl = 'http://localhost:5000/';

export default class ApiClient{

	get(endpoint, options = null){
		const url = `${apiUrl}${endpoint}`;
		return axios.get(url, options);
	}

	post(endpoint = "", data ={}, options = {headers: {'Content-Type': 'application/json'}}){
		const url = `${apiUrl}${endpoint}`;
		return axios.post(url, data, options);
	}
}
