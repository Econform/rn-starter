import { FETCH_RACKING } from 'FETCH_RACKING'
// import { getRacking } from 'app/api'

const API_URL = process.env.API_URL

export const fetchRacking = () => {
  return (dispatch) => {
    fetch(`${API_URL}/items`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: FETCH_RACKING,
          payload: data,
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
