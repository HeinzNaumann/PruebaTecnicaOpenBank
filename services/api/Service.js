import client from './client.js'

export const createPassword = (adObj) => {
  const url = '/api/openbank'

  return client.post(url, adObj)
}
