import { create } from 'apisauce'
import { apiUrl } from 'app/config'

const api = create({
  baseURL: apiUrl,
})
