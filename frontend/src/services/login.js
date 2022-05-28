import axios from 'axios'

const baseUrl = 'http://localhost:5000/api/v1/auth/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  console.log(response.data)
  return response.data
  
}

export default { login }