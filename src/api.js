import axios from 'axios'
import qs from 'querystring'

let req = axios.create({
    baseURL: 'https://myseu.cn/library-srv/',
    headers: { 'Content-Type': 'application/json' },
    validateStatus: () => true
  })

export default {
	get: (url, params) => {
    return new Promise((resolve, reject) => {
      req.get(url, {
        params: params
      })
      .then(response => {
        resolve( response.data );
      })
      .catch(error => {
        reject( error );
      });
    })
  },
}
