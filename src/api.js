import axios from 'axios'

export default axios.create({
  baseURL: 'https://myseu.cn/library-srv/',
  validateStatus: () => true
})
