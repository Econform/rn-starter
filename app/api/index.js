import { create } from 'apisauce'
import config from 'app/config'
import Reactotron from 'reactotron-react-native'
const INITIAL_OPTIONS = {
  refreshToken: 'shippin_ZzZwN9S62iJ_mgClBtBvUg',
}
class EconformApi {
  client = null
  options = { ...INITIAL_OPTIONS }
  constructor(refreshToken) {
    this.options = {
      refreshToken: 'shippin_ZzZwN9S62iJ_mgClBtBvUg',
    }
    this.client = create({
      baseURL: config.apiUrl,
      headers: this._getHeaders(),
    })
    this.client.addMonitor(Reactotron.apisauce)
  }
  addMonitor = (monitorFn) => {
    return this.client.addMonitor(monitorFn)
  }
  _getHeaders = () => {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
    const { refreshToken } = this.options
    if (refreshToken != null) {
      headers.Authorization = 'Bearer ' + refreshToken
    } else {
      delete headers.Authorization
    }
    return headers
  }
  updateOptions = (options = {}) => {
    this.options = { ...this.options, ...options }
    this._updateClient()
  }
  reset = () => {
    this.updateOptions({ ...INITIAL_OPTIONS })
  }
  _updateClient = () => {
    this.client.setHeaders(this._getHeaders())
  }
  fetchData = () => {
    return this.client.get(`/items`)
  }
}

const api = new EconformApi()
export default api
