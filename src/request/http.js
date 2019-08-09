import axios from 'axios';
import QS from 'qs'


//请求超时时间
axios.defaults.timeout = 30000;
axios.defaults.withCredentials = true;
// 设置post请求头
axios.defaults.headers.post['Content-Type'] = "application/json";



//设置请求地址
axios.defaults.baseURL = 'http://192.168.3.39:8095';

const get = (url,params) => {
	return new Promise((resolve,reject)=>{
		axios.get(url,{
			params : params
		})
		.then(res =>{
			resolve(res.data);
		})
		.catch(err =>{
			reject(err.data)

		}).catch(error =>{

			console.log("error");

		})
	});
}

const post = (url,params,p) =>{
	return new Promise((resolve,reject) =>{

		axios.post(url,params,p)
		.then(res =>{

			resolve(res.data);

		})
		.catch(err =>{

			reject(err.data);

		})
	}).catch(error=>{
		console.log("error");
	});
}


const put = (url,params) =>{
	return new Promise((resolve,reject) =>{

		axios.put(url,params)
		.then(res =>{
			resolve(res.data);
		})
		.catch(err =>{

			reject(err.data);

		})
	}).catch(error=>{
		console.log("error");
	});
}

const deletex = (url,params) =>{
	return new Promise((resolve,reject) =>{

		axios.delete(url,params)
		.then(res =>{
			resolve(res.data);
		})
		.catch(err =>{

			reject(err.data);

		})
	}).catch(error=>{
		console.log("error");
	});
}

export default {
	get,
	post,
	put,
	deletex
}
