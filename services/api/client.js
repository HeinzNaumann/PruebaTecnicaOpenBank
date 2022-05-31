import axios from 'axios'

const client = axios.create({
  baseURL: process.env.openbank
})

export default client
