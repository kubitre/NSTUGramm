import axios from 'axios';

const apiUrl = 'http://localhost:5000/';

export default class ApiClient{

	get(endpoint, options = null){
		const url = `${apiUrl}${endpoint}`;
		return axios.get(url, options);
	}

	post(endpoint = "", body = {}){
		//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
		console.log(body);
		const url = `${apiUrl}${endpoint}`;
		//, {headers: {'Content-Type':'application/json;charset=UTF-8'}}
		return axios.post(url, body, {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}});
	}

	postFetch(endpoint = "", body=""){
		fetch(`${apiUrl}/${endpoint}`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json;charset=UTF-8'
			},
			data: body
		})
	};
}
